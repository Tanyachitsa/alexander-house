import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Header />
      <video
        className="video-compilation"
        src="/src/Media/homepage.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{ marginBottom: "100px" }}
      ></video>
      <br />
      <p className="homepage-summary">
        <em className="homepage-summary-title">
          <strong style={{ fontSize: "55px" }}>Alexander House </strong>is a
          refined sanctuary for modern professionals, creatives, and discerning
          minds.
        </em>
        <br />
        Designed for those who value privacy, connection, and elevated living,
        membership unlocks access to elegant lounges, curated dining, cultural
        salons, wellness spaces, and luxurious overnight stays. With limited
        memberships, tailored events, and a focus on community over crowd,
        Alexander House is more than a club — it's your second home.
      </p>
      <hr />

      <div
        className="container text-center homepage"
        style={{ paddingTop: "80px" }}
      >
        <div className="row">
          <div className="col">
            <img
              className="homepage-stays"
              src="/src/Media/homepage-stays.jpg"
              alt="image of a hotel with a pool"
            />
          </div>
          <div className="col">
            <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>
              Stays
            </h1>
            <p style={{ fontSize: "23px" }}>
              Experience the ultimate escape with our luxury overnight suites —
              where elegance, comfort, and privacy meet. Unwind in beautifully
              designed spaces crafted for rest, reflection, and indulgence.
            </p>
            <Link to="/Houses">
              <button className="button-info">Find out More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container text-center homepage">
        <div className="row">
          <div className="col">
            <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>
              Events
            </h1>
            <p style={{ fontSize: "23px" }}>
              From intimate dinners to cultural salons and curated socials, our
              events are designed to inspire and connect. Each gathering is a
              celebration of taste, thought, and community.
            </p>
            <Link to="/Events">
              <button className="button-info">Find out More</button>
            </Link>
          </div>
          <div className="col">
            <img
              className="homepage-events"
              src="/src/Media/homepage-events.jpg"
              alt="image of a hotel with a pool"
            />
          </div>
        </div>
      </div>
      <div className="container text-center homepage">
        <div className="row">
          <div className="col">
            <img
              className="homepage-wellness"
              src="/src/Media/homepage-wellness.jpg"
              alt="image of a hotel with a pool"
            />
          </div>
          <div className="col">
            <h1 style={{ fontStyle: "italic", textDecoration: "underline" }}>
              Wellness
            </h1>
            <p style={{ fontSize: "23px" }}>
              Our wellness space offers a calm retreat with state-of-the-art
              fitness, personal training, and restorative treatments. Designed
              for balance, energy, and everyday renewal.
            </p>
            <Link to="/Wellness">
              <button className="button-info">Find out More</button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          marginLeft: "250px",
          marginRight: "250px",
          marginTop: "100px",
          marginBottom: "200px",
        }}
      >
        To enjoy access to these exclusive benefits and experiences, become a
        member of Alexander House. Choose the membership that suits your
        lifestyle and join our community today.
        <br />
        <Link to="/Membership">
          <button className="membershipButton">Apply for a membership</button>
        </Link>
      </p>

      <Footer />
    </>
  );
}
