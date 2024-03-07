import bataan from "../../src/assets/home/properties/bataan.jpg";
import bataanBg from "../../src/assets/home/bg-lpw.png";
import lcqc from "../../src/assets/home/properties/lcqc.jpeg";
import vsBg from "../../src/assets/home/bg-lpw.png";
import vs from "../../src/assets/home/properties/vsh.jpg";

const BataanDesc = () => {

  return (
    <div className="mb-10 xmd:mt-10">
      <div className="relative h-full">
        <div className="container-fluid">
            {/**bg img */}
          <div className="xmd:hidden">
            <img src={bataanBg} alt="" className="w-auto" />
          </div>
          {/**grid A */}
          <div className="grid 2xl:grid-cols-2 gap-10 xmd:gap-5 w-full mx-auto 2xl:absolute bottom-20 2xl:px-20 xmd:px-2 text-center text-black">
            <div className="">
              <img src={bataan} alt="" className="w-4/5 xmd:w-full mx-auto h-auto" />
            </div>
            <div className="text-left 2xl:pt-28 xxl:pt-14 xmd:pt-0">
              <h1 className="xmd:text-2xl 2xl:text-3xl font-playfair mb-4 xmd:text-[#804B00]">Las Casas Bagac, Bataan</h1>
              <p className="2xl:text-xl xmd:text-sm font-opensans">Las Casas Filipinas de Acuzar, situated in Bagac, Bataan, is a beach resort,
                convention center, and heritage destination rolled into one.

                It is home to Mr. Jose Acuzar’s prestige collection of Spanish-Filipino heritage
                houses that have been salvaged from total ruin and neglect. Rebuilt by a team of
                artisans and craftsmen in the town of Bagac, Bataan; Las Casas Filipinas de Acuzar,
                features the finest of Filipino craftsmanship, artistry, and skill; giving the
                property a look and feel that is distinctively on its own.`</p>
            </div>
          </div>
        </div>
      </div>

      {/**grid D */}
      <div className="h-full">
        <div className="container-fluid py-20 xmd:py-10">
            {/**grid A */}
            <div className="grid 2xl:grid-cols-2 gap-10 xmd:gap-5 w-full mx-auto 2xl:px-20 xmd:px-2 text-center">
              <div className="text-left 2xl:pt-28 xxl:pt-14 xmd:pt-0 text-[#804B00] xmd:order-1">
                <h1 className="xmd:text-2xl 2xl:text-3xl font-playfair mb-4">Las Casas Quezon City</h1>
                <p className="2xl:text-xl xmd:text-sm text-[#2A2A2A] font-opensans">Las Casas Filipinas de Acuzar - Quezon City is the first venture under the Las
                Casas Heritage Collection by Las Casas Filipinas de Acuzar which first began in
                Bagac, Bataan.

                Situated in the heart of Quezon City along Roosevelt Avenue, Las Casas Quezon
                City is known for being an events space, restaurant, and museum that brings the
                well-loved Las Casas experience from Bataan into the metro.`</p>
              </div>
              <div className="">
                <img src={lcqc} alt="" className="w-4/5 xmd:w-full mx-auto h-auto" />
              </div>
            </div>
          </div>
      </div>


      {/**grid C */}
      <div className="relative h-full">
        <div className="container-fluid">
            {/**bg img */}
          <div className="xmd:hidden">
            <img src={vsBg} alt="" className="w-auto" />
          </div>
          {/**grid A */}
          <div className="grid 2xl:grid-cols-2 gap-10 xmd:gap-5 w-full mx-auto 2xl:absolute bottom-20 2xl:px-20 xmd:px-2 text-center text-black">
            <div className="">
              <img src={vs} alt="" className="w-4/5 xmd:w-full mx-auto h-auto" />
            </div>
            <div className="text-left 2xl:pt-28 xxl:pt-16 xmd:pt-0">
              <h1 className="xmd:text-2xl 2xl:text-3xl font-playfair mb-4 xmd:text-[#804B00]">VS Hotel</h1>
              <p className="2xl:text-xl xmd:text-sm font-opensans">VS Hotel Convention Center is the ultimate destination for athletic enthusiasts
                and wellness seekers. Located along the stretch of EDSA, Quezon City, VS Hotel’s
                unique concept combines the luxurious comfort of a hotel with state-of-the-art
                sports facilities, offering unlimited access to fitness classes, gym facilities,
                and sports facilities to its guests.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default BataanDesc;
