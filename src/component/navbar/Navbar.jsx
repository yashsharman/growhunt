import "./navbar.css";
import flag from "../../assets/images/flag.png"
import arrowDown from "../../assets/images/arrow-down.png"

 const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo-heading">Logo</span>
      <div className="group">
        <div className="nav-links">
          <div className="nav-link">Business</div>
          <div className="nav-link">Driver Partner</div>
          <div className="nav-link">Vehicles</div>
          <div className="nav-link">About Us</div>
          <div className="nav-link">Contact Us</div>
        </div>
        <div className="lang-container">
          <img className="flag" alt="Flag" src={flag} />
          <div className="div">English</div>
          <img className="arrow-down" alt="Vector" src={arrowDown} width={15} height={10} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;