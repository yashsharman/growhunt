import "./footer.css";
import mailIcon from "../../assets/images/mail-icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="contact-container">
        <div className="mail-container">
          <img className="mail-icon" alt="Mail" src={mailIcon} />
          <p>We’d love to hear from you</p>
        </div>
        <div className="gradient-text">GET IN TOUCH</div>
        <div className="contact-type-container">
          <div className="contact-type">Business Related</div>
          <div className="contact-type">Driver Related</div>
        </div>
      </div>

      <div className="link-container">
        <div className="footer-links-group">
          <div className="footer-links footer-active-link">Home</div>
          <div className="footer-links">Business</div>
          <div className="footer-links">Driver</div>
          <div className="footer-links">Vehicle</div>
          <div className="footer-links">About us</div>
        </div>

        <div>
          <div className="div">Located in</div>
          <div className="footer-p-cantainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sollicitudin, eros id tincidunt feugiat, sem magna tristique nunc,
              viverra vehic
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sollicitudin, eros id tincidunt feugiat, sem magna tristique nunc,
              viverra vehic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
