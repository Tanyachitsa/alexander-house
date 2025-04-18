import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Events() {
  return (
    <>
      <Header />
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
          marginBottom: "30px",
        }}
      >
        - Events -
      </h1>
      <p
        style={{
          marginLeft: "300px",
          marginRight: "300px",
          fontSize: "25px",
          marginBottom: "70px",
        }}
      >
        From exclusive member events and curated cultural evenings to seasonal
        celebrations and wellness retreats, Alexander House is always alive with
        something exceptional. Book your place and be part of the experience.
        <br /> Looking to host your own gathering? Host with distinction at
        Alexander House. Whether you're planning an intimate celebration, a
        corporate gathering, or a creative showcase, our elegant spaces are
        available for private hire. With bespoke service, beautiful
        surroundings, and a discreet atmosphere, each house offers the perfect
        backdrop for memorable moments tailored to your vision.
      </p>
      <div className="events-buttons">
        <button className="whats-on-button" style={{ marginRight: "50px" }}>
          Whats On
        </button>
        <button className="private-hire-button">Private Hire</button>
      </div>
      <Footer />
    </>
  );
}
