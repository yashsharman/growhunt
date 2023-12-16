import "./detailCard.css";
import mileageIcon from "../../assets/images/car-battery-icon.png";
import speedIcon from "../../assets/images/speedometer-icon.png";
import chargingIcon from "../../assets/images/ev-icon.png";

const DetailCard = ({ imgUrl, flexFlow , imgName, textAlign }) => {
  console.log(textAlign)
  return (
    <section className="detail-card">
      <div className="card-wrapper" style={{ flexFlow:flexFlow}}>
        <div>
          <div className="detail-card-heading">Model Name</div>
          <p style={{textAlign:textAlign}}>
            Et harum quidem rerum facilis est et
            <br />
            expedita distinctio. Nam libero tempore, <br />
            cum soluta nobis est
          </p>
          <div className="detail-group-container">
            <div className="detail-group">
              <img className="detail-icons" src={chargingIcon} />
              <div className="icon-label">Full Charging</div>
              <div>
                <span>3</span> hrs
              </div>
            </div>
            <div className="detail-group">
              <img className="detail-icons" src={speedIcon} />
              <div className="icon-label">Max Speed</div>
              <div>
                <span>125</span> kmph
              </div>
            </div>
            <div className="detail-group">
              <img className="detail-icons" src={mileageIcon} />
              <div className="icon-label">Mileage</div>
              <div>
                <span>50</span> kms
              </div>
            </div>
          </div>
        </div>
        <img className={imgName} alt="Car battery icon" src={imgUrl} />
      </div>
    </section>
  );
};
export default DetailCard;
