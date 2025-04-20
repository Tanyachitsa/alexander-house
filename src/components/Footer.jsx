import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img
              src="./src/Media/award.png"
              alt="award pictures"
              height={150}
            />
          </div>
          <div class="col">
            {" "}
            <p className="address-container">
              Alexander House
              <br />
              10 Hanover Square Mayfair, London
              <br />
              W1S 1DA United Kingdom
              <br />
              020 7946 1234
            </p>
            <div className="icon-container">
              <FontAwesomeIcon icon={faInstagram} className="icons-social" />
              <FontAwesomeIcon icon={faLinkedin} className="icons-social" />
              <FontAwesomeIcon icon={faTwitter} className="icons-social" />
            </div>
          </div>
          <div class="col">
            <h4 style={{ textDecoration: "underline" }}>Careers</h4>
            Email: careers@alexanderhouse.co.uk <br /> Phone: +44 (0)20 7946
            5678 <br />
            For current opportunities or to submit a speculative application,
            please email your CV and cover letter to our team.
          </div>
        </div>
      </div>
    </footer>
  );
}
