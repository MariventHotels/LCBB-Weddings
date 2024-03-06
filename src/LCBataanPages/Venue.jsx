import venueA from "../../src/assets/LasCasasBataan/Venue/vn1.jpg";
import venueB from "../../src/assets/LasCasasBataan/Venue/vn2.jpg";
import venueC from "../../src/assets/LasCasasBataan/Venue/vn3.jpg";
import venueD from "../../src/assets/LasCasasBataan/Venue/vn4.jpg";
import venueE from "../../src/assets/LasCasasBataan/Venue/vn5.jpg";
import venueF from "../../src/assets/LasCasasBataan/Venue/vn6.jpg";
import venueG from "../../src/assets/LasCasasBataan/Venue/vn7.jpg";
import venueH from "../../src/assets/LasCasasBataan/Venue/vn8.jpg";
import venueI from "../../src/assets/LasCasasBataan/Venue/vn2.jpg";

const Venue = () => {
  return (
    <div id="venue" className="mt-10">
      <div className="flex flex-col">
        <h1 className="text-center mb-5 text-3xl font-playfair xmd:text-2xl">
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
            <a href={venueA} data-lightbox="example-1"><img src={venueA} alt="wedding venue" /></a>
          </div>
          <div>
            <a href={venueB} data-lightbox="example-1"><img src={venueB} alt="wedding venue" /></a>
          </div>
          <div>
            <a href={venueC} data-lightbox="example-1"><img src={venueC} alt="wedding venue" /></a>
          </div>
          <div>
            <a href={venueD} data-lightbox="example-1"><img src={venueD} alt="wedding venue" /></a>
          </div>
          <div>
            <a href={venueE} data-lightbox="example-1"><img src={venueE} alt="wedding venue" /></a>
          </div>
          <div>
            <a href={venueF} data-lightbox="example-1"><img src={venueF} alt="wedding venue" /></a>
          </div>
          <div>
            <a href={venueG} data-lightbox="example-1"><img src={venueG} alt="wedding venue" /></a>
          </div>
          <div>
            <a href={venueH} data-lightbox="example-1"><img src={venueH} alt="wedding venue" /></a>
          </div>
          <div>
            <a href={venueI} data-lightbox="example-1"><img src={venueI} alt="wedding venue" /></a>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-[#CEAA77] max-w-[63rem] mx-auto mb-10 mt-20" />
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="font-playfair text-2xl xmd:text-base">
            For more details please contact us at:
          </h2>
          <h2 className=" font-playfair text-2xl xmd:text-base">
            +63 917 872 9368 | contact@lascasasweddings.com
          </h2>
      </div>
    </div>
  );
};

export default Venue;
