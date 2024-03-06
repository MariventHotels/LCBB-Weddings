import QcCarousel from "../carousel/QcCarousel";
import styles from "../styles/divider.module.css";

const Venue = () => {
  return (
    <div id="venue" className="mt-10">
      <div className="flex flex-col">
        <h1 className="text-center text-3xl font-playfair xmd:text-2xl">
          Venue
        </h1>
        <p className="text-center text-[#424242] font-opensans text-lg xmd:text-base mx-[1rem] mb-10">
          Las Casas Filipinas de Acuzar will surely leave each of your guest
          awestruck with its timeless yet romantic elegance.
        </p>
      </div>
      <div className="mx-20">
        <div className="grid xmd:grid-cols-1 grid-cols-3 gap-5">
          <div>
            <a href="../../src/assets/LasCasasQC/Venue/Casa Castillo.jpg" data-lightbox="example-1"><img src="../../src/assets/LasCasasQC/Venue/Casa Castillo.jpg" alt="image-1" /></a>
          </div>
          <div>
            <a href="../../src/assets/LasCasasQC/Venue/Frisco 1 and 2.jpg" data-lightbox="example-1"><img src="../../src/assets/LasCasasQC/Venue/Frisco 1 and 2.jpg" alt="image-1" /></a>
          </div>
          <div>
            <a href="../../src/assets/LasCasasQC/Venue/Garden 3.jpg" data-lightbox="example-1"><img src="../../src/assets/LasCasasQC/Venue/Garden 3.jpg" alt="image-1" /></a>
          </div>
          <div>
            <a href="../../src/assets/LasCasasQC/Venue/Plaza.jpg" data-lightbox="example-1"><img src="../../src/assets/LasCasasQC/Venue/Plaza.jpg" alt="image-1" /></a>
          </div>
          <div>
            <a href="../../src/assets/LasCasasQC/Venue/Roosevelt Function Room.jpg" data-lightbox="example-1"><img src="../../src/assets/LasCasasQC/Venue/Roosevelt Function Room.jpg" alt="image-1" /></a>
          </div>
          <div>
            <a href="../../src/assets/LasCasasQC/Venue/Casa Castillo.jpg" data-lightbox="example-1"><img src="../../src/assets/LasCasasQC/Venue/Casa Castillo.jpg" alt="image-1" /></a>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-[#CEAA77] max-w-[63rem] mx-auto mb-10 mt-20" />
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="font-playfair text-2xl xmd:text-base">
            For more details please contact us at:
          </h2>
          <h2 className=" font-playfair text-2xl xmd:text-base">
            +63 917 872 9368 | weddings@lascasasweddings.com
          </h2>
        </div>
    </div>
  );
};

export default Venue;
