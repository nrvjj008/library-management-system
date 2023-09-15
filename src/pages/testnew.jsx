import Head from 'next/head';
import HTMLFlipBook from "react-pageflip";
import { useEffect, useState } from "react";

export function Home() {
    const [height, setHeight] = useState(700);  // Initial height value
    const [width, setWidth] = useState(500);    // Initial width value

    useEffect(() => {
        // Update height and width upon component mount
        setHeight(window.innerHeight);
        setWidth(window.innerWidth * 0.5);  // Assuming you want the width to be 50% of the viewport, adjust as needed

        // Optional: Update dimensions upon window resize
        const handleResize = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth * 0.5);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            // Cleanup event listener on component unmount
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const images = Array.from({ length: 10 }, (_, i) => `/page_${i + 1}.webp`);

    return (
        <div>
            <Head>
                <title>PDF Flipbook</title>
            </Head>

            <main>
                <div className={"flex justify-center items-center h-screen"}>
                    <HTMLFlipBook width={width} height={height}>
                        {images.map((image, index) => (
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
