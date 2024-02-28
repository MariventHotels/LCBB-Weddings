import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LCBataan from "./Pages/LCBataan";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BPackages from "./LCBataanPages/Packages";
import BVenue from "./LCBataanPages/Venue";
import BMenu from "./LCBataanPages/Menu";
import BLookBook from "./LCBataanPages/LookBook";
import LCqc from "./Pages/LCqc.jsx";
import QCPackages from "./LCQCPages/Packages";
import QCVenue from "./LCQCPages/Venue";
import QCMenu from "./LCQCPages/Menu";
import QCLookBook from "./LCQCPages/LookBook";
import VShotel from "./Pages/VShotel";
import VSPackages from "./VSPages/Packages.jsx";
import Gallery from "./Pages/Gallery";
import AboutUs from "./Pages/AboutUs";
import Inquire1 from "./Pages/Inquire1.jsx";
import { ScrollToTop } from "react-router-scroll-to-top";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


function App() {

  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Analytics />
        <SpeedInsights />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/bataan/*" element={<LCBataan />} />
          <Route path="/bataan/packages" element={<BPackages />} />
          <Route path="/bataan/venue" element={<BVenue />} />
          <Route path="/bataan/menu" element={<BMenu />} />
          <Route path="/bataan/lookbook" element={<BLookBook />} />
          <Route path="/qc/*" element={<LCqc />} />
          <Route path="/qc/packages" element={<QCPackages />} />
          <Route path="/qc/venue" element={<QCVenue />} />
          <Route path="/qc/menu" element={<QCMenu />} />
          <Route path="/qc/lookbook" element={<QCLookBook />} />
          <Route path="/vshotel" element={<VShotel />} />
          <Route path="/vshotel/packages" element={<VSPackages />} />
          <Route
            path="/gallery"
            element={<Gallery/>}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/inquire" element={<Inquire1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
