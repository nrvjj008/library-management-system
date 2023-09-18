import React from 'react';
import HTMLFlipBook from "react-pageflip";
 // Import necessary module

const VirtualizedFlipBook = ({ bookPages, width, height, currentPage, onFlip }) => {
    return ( // Render the flipbook
        <HTMLFlipBook
            width={width}
            height={height}
            onFlip={onFlip}
            startPage={currentPage}
            className={"my-auto mx-auto w-full"}
        >
            {bookPages.map((image, index) => (
                <img className="w-1/2" key={index} src={image} alt={`Page ${index + 1}`} style={{ objectFit: 'contain' }} />
            ))}
        </HTMLFlipBook>
    );
}

export default VirtualizedFlipBook;
