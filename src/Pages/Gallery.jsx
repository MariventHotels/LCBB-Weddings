import { useState } from "react";
import images from "../data/gallery";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import ImageHover from "../Reusable Components/ImageHover";`
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Dropdown from "../components/Dropdown";
import { Fade } from "react-awesome-reveal";
// import { Slide } from "react-awesome-reveal";

const GalleryPage = () => {
  // State to manage the index of the selected image for the Lightbox
  const [index, setIndex] = useState(-1);

  // Function to handle image click and set the Lightbox index
  const handlePhotoClick = ({ index }) => {
    setIndex(index);
  };

  // State to filter images based on selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category button click and update the selectedCategory state
  const handleButton = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to filter images based on the selected category
  function filteredData(images, selected) {
    let filteredImages = images;

    if (selected) {
      filteredImages = filteredImages.filter(
        ({ category }) => category === selected
      );
    }
    return filteredImages;
  }

  // Get the filtered images based on the selected category
  const result = filteredData(images, selectedCategory);

  return (
    <Fade triggerOnce>
      <h1 className="font-playfair text-4xl text-center mt-20 mb-5 xxsm:mt-8">
        Gallery
      </h1>
      <p className="font-opensans text-lg text-center mb-20 xxsm:mb-8 xmd:text-base xsm:mx-[1rem] text-[#424242]">
        &quot;Explore our stunning places where love and memories intertwine,
        creating enchanting moments that last a lifetime.&quot;
      </p>
      <div className="max-w-[63rem] mx-auto mb-20 ">
        <div className="flex justify-center gap-10 mb-5 font-opensans xmd:hidden">
          <button
            onClick={handleButton}
            value="bataan"
            className="hover:text-[#F0AF59]"
          >
            Las Casas Bataan
          </button>
          <button
            onClick={handleButton}
            value="juico"
            className="hover:text-[#F0AF59]"
          >
            Las Casas QC
          </button>
          <button
            onClick={handleButton}
            value="vshotel"
            className="hover:text-[#F0AF59]"
          >
            VS Hotel
          </button>
          {/**
          <button
            onClick={handleButton}
            value="vshotel"
            className="hover:text-[#F0AF59]"
          >
            Pre-nup
          </button>
        */}
        </div>
        <div className="xmd:flex justify-center relative hidden">
          <Dropdown handleButton={handleButton} />
        </div>
        <hr className="border-[rgb(206,170,119)] mb-8 xxsm:hidden" />

        <PhotoAlbum
          breakpoints={[485, 852, 1137]}
          padding={(spacingWidth) => {
            if (spacingWidth < 485) return 4;
            if (spacingWidth < 852) return 5;
            return 5;
          }}
          layout="rows"
          photos={result}
          onClick={handlePhotoClick}
        />
      </div>
      <Lightbox
        slides={images.map((image) => ({ src: image.original }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        arrow={true}
        // plugins={[Thumbnails]}
        // render={{
        //   iconPrev: () = null,
        //   iconNext: () => null,
        // }}
      />
    </Fade>
  );
};

export default GalleryPage;
