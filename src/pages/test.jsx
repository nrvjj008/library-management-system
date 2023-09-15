import React from 'react';
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";


export default function ImageFlipBook() {
    const images = [
        '/1.jpeg',
        '/2.jpeg',
        '/3.jpeg',
        '/4.jpeg',
        '/5.jpeg'
    ];

    return (
        <HTMLFlipBook width={300} height={500}>
            <div className="demoPage "><Image src={"/1.jpeg"} alt={""} height={300} width={200}/></div>
            <div className="demoPage"><Image src={"/1.jpeg"} alt={""} height={300} width={200}/></div>
            <div className="demoPage"><Image src={"/1.jpeg"} alt={""} height={300} width={200}/></div>
            <div className="demoPage"><Image src={"/1.jpeg"} alt={""} height={300} width={200}/></div>
        </HTMLFlipBook>
    );
}
