import BtCarousel from "../carousel/BtCarousel";
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
      <div className="relative m-auto">
        <div className={styles.top}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
          </svg>
        </div>
        <BtCarousel />
        <div className={styles.bottom}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
          </svg>
        </div>
      </div>
      <hr className="border-t-1 border-[#CEAA77] max-w-[63rem] mx-auto mb-10" />
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
