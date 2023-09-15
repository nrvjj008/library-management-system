import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from "axios";
import api, {getAccessToken} from "@/axiosHandler";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";

export default function CategoryPage() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null); // New state to track total number of pages
    const router = useRouter();
    const { categoryId } = router.query;
    console.log(categoryId);

    useEffect(() => {
        if (categoryId) {
            api.get(`/books/category/${categoryId}/`, ).then(response => {
                setTotalPages(response.data.totalPages || null);
                setBooks(response.data);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [categoryId]);

    const fetchBooks = (categoryId, page) => {
        if (categoryId) {
            api.get(`/books/category/${categoryId}/`, {
                params: {
                    page: page
                }
            }).then(response => {
                setTotalPages(response.data.totalPages || null);
                setBooks(prevBooks => [...prevBooks, ...response.data]);
            }).catch(error => {
                console.error(error);
            });
        }
    }



    const handleLoadMore = () => {
        fetchBooks(categoryId, currentPage + 1);
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <div className="bg-gold text-slate-700 min-h-screen">
            <NavBar />
            <div className="container mx-auto my-10 bg-gold py-8">
                {books.length > 0 ? (
                    <>
                        <div className="grid grid-cols-5 gap-4">
                            {books.map(book => (
                                <Link href={`/books/${book.id}`} key={book.id} className="space-y-4 flex flex-col justify-between  items-center  p-1">
                                    <img src={book.cover_image} alt={book.title} className="w-[200px] h-[300px] object-cover hover:scale-95 transition-all duration-200"/>
                                    <Link href={`/books/${book.id}`} className="mt-4    rounded text-center bg-blue-950 text-white w-[180px] py-2 px-2 hover:bg-blue-800">
                                        Read
                                    </Link>
                                </Link>
                            ))}
                        </div>
                        {currentPage < totalPages ? (
                            <div className="flex justify-center mt-8">
                                <button onClick={handleLoadMore} className="bg-blue-950 text-white py-2 px-4 hover:bg-blue-800">
                                    Load More
                                </button>
                            </div>
                        ) : null}
                    </>
                ) : (
                    <p className="text-center mt-10 text-xl">No books available in this category.</p>
                )}
            </div>
        </div>
    );
}
