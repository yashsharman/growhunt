import "./heroSection.css";
import map from "../../assets/images/Map.png";
import heroImg from "../../assets/images/Vehicles/hero-img.png";
import whiteCircle from "../../assets/images/white-circle.png";


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div
        className="background-div"
        style={{ backgroundImage: `URL(${map})` }}
      >
        <h1 className="hero-heading">
          Our Zero Emission<span className="hero-heading-span">Champions!</span>
        </h1>
        <div className="image-group">
          <img
            className="hero-img"
            alt="Our zero emission"
            src={heroImg}
          />
          <div className="feature-ele f1"><span>Feature 1</span><img className="white-circle" src={whiteCircle} width={45}/></div>
          <div className="feature-ele f2"><span>Feature 2</span><img className="white-circle" src={whiteCircle} width={45}/></div>
          <div className="feature-ele f3"><span>Feature 3</span><img className="white-circle" src={whiteCircle} width={45}/></div>
          <div className="feature-ele f4"><span>Feature 4</span><img className="white-circle" src={whiteCircle} width={45}/></div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
