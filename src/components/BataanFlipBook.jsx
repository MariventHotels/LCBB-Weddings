import React from "react";
import HTMLFlipBook from "@cdk0507/react-pageflip";
import bataanflipbook from "../data/bataanflipbook";

// BataanFlipBook Component
const BataanFlipBook = () => {
  return (
    <HTMLFlipBook
      width={700} // Set the width of the flipbook
      height={600} // Set the height of the flipbook
      size="stretch" // Set the size of the flipbook (stretch or other size values)
      minWidth={300} // Set the minimum width of the flipbook
      maxWidth={700} // Set the maximum width of the flipbook
      minHeight={300} // Set the minimum height of the flipbook
      maxHeight={600} // Set the maximum height of the flipbook
      maxShadowOpacity={0.5} // Set the maximum shadow opacity for pages
      mobileScrollSupport={true} // Enable or disable mobile scroll support for the flipbook
    >
      {bataanflipbook.map((page) => (
        <img key={page.id} src={page.image} className="object-contain" />
      ))}
    </HTMLFlipBook>
  );
};

export default BataanFlipBook;
