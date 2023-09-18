import { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import api from '@/axiosHandler';
import {useRouter} from "next/router";


export function Home() {
    const [height, setHeight] = useState(700);  // Initial height value
    const [width, setWidth] = useState(500);    // Initial width value
    const flipBookRef = useRef(null);
    const [book, setBook] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showMore, setShowMore] = useState(false); // For the 'read more' functionality
    const filledStars = Math.floor(book?.average_rating || 0);
    const bookId = 2111;
    const halfStar = book?.average_rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
    const [showNotes, setShowNotes] = useState(false);
    const [showReview, setShowReview] = useState(false);
    const [bookNote, setBookNote] = useState('');
    const [bookReview, setBookReview] = useState('');

    const [viewMode, setViewMode] = useState('twoPage'); // "twoPage", "onePage", or "fullScreen"

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isTwoPage, setIsTwoPage] = useState(true);

    const [bookPages, setBookPages] = useState([]);
    const fetchingPagesRef = useRef(false);
    const lastFetchedPageRef = useRef(0);
    const [bookRating, setBookRating] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isFavourtie, setisFavourite] = useState(false);

    useEffect(() => {
        if (bookId) {
            fetchPages(0);  // start from page 0 (you'll get 1-10)
        }
    }, [bookId]);

    const fetchPages = async (startPage) => {
        if (fetchingPagesRef.current) {
            return; // If currently fetching, don't initiate another fetch
        }

        fetchingPagesRef.current = true; // Set to currently fetching
        setIsLoading(true);
        try {
            const response = await api.get(`/book-pages/${bookId}/`, { params: { current_page: startPage } });
            const data = response.data;

            // Append the new pages to the current pages
            setBookPages(prevBookPages => [...prevBookPages, ...data.page_images]);

            lastFetchedPageRef.current = startPage + data.page_images.length; // Update last fetched page ref
        } catch (error) {
            console.error("Failed to fetch book pages:", error);
        } finally {
            setIsLoading(false);
            fetchingPagesRef.current = false; // Set to not currently fetching
        }
    };


    const handlePageChange = (e) => {
        const currentPage = e.data;  // Assuming the event provides the current page number

        if (currentPage >= bookPages.length - 2) {  // If user is 2 pages away from the end, load more pages
            fetchPages(currentPage);
        }
    };

    return (
        <div>


            <main>
                <div className={"flex justify-center items-center h-screen"}>
                    <HTMLFlipBook
                        mobileScrollSupport={true}
                        ref={flipBookRef}
                        width={width}
                        height={height}
                        onFlip={handlePageChange}
                    >
                        {bookPages.map((image, index) => (
                            <img className="" key={index} src={image} alt={`Page ${index + 1}`} style={{ objectFit: 'cover' }} />
                        ))}
                    </HTMLFlipBook>
                </div>
            </main>

            <footer>
                Powered by Next.js and react-pageflip.
            </footer>
        </div>
    );
}

export default Home;
