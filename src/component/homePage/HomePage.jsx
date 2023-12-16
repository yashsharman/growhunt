import "./homePage.css";

import v2 from "../../assets/images/Vehicles/v2.png";
import v3 from "../../assets/images/Vehicles/v3.png";
import v4 from "../../assets/images/Vehicles/v4.png";
import shape1 from '../../assets/images/Group9103.png'
import shape2 from '../../assets/images/Ellipse14.png'
import shape3 from '../../assets/images/Ellipse16.png'

import CategoryBar from "../categoryBar/CategoryBar";
import HeroSection from "../heroSection/HeroSection";
import DetailCard from "../detailsCard/DetailsCard";

function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />
      <CategoryBar />
      <DetailCard imgUrl={v2} flexFlow={"row"} imgName={"v2"} textAlign={"left"}/>
      <DetailCard imgUrl={v3} flexFlow={"row-reverse"} imgName={"v3"}textAlign={"right"} />
      <DetailCard imgUrl={v4} flexFlow={"row"} imgName={"v4"} textAlign={"left"}/>
      <img className="shape1" src={shape1} alt="" />
      <img className="shape2" src={shape2} alt="" />
      <img className="shape3" src={shape3} alt="" />
    </div>
  );
}

export default HomePage;
