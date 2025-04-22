import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import WhatsOn from "../components/WhatsOn";
import Hire from "../components/Hire";
import FadeInSection from "../animations/FadeInSection";
import { Link } from "react-router-dom";
import { auth } from "../data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Events() {
  const [showHire, setShowHire] = React.useState(false);
  const [showEvents, setShowEvents] = React.useState(false);
  const [user] = useAuthState(auth);

  function toggleHire() {
    setShowHire((prevHire) => !prevHire);
    setShowEvents(false);
  }
  function toggleEvents() {
    setShowEvents((prevEvents) => !prevEvents);
    setShowHire(false);
  }
  return (
    <>
      <Header />
      <FadeInSection>
        {" "}
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
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
          celebrations and wellness retreats, Alexander House is always alive
          with something exceptional. Book your place and be part of the
          experience.
          <br /> Host with distinction at Alexander House. Whether you're
          planning an intimate celebration, a corporate gathering, or a creative
          showcase, our elegant spaces are available for private hire. With
          bespoke service, beautiful surroundings, and a discreet atmosphere,
          each house offers the perfect backdrop for memorable moments tailored
          to your vision.
        </p>
      </FadeInSection>
      <div className="events-buttons">
        <button
          className="whats-on-button"
          style={{ marginRight: "50px" }}
          onClick={toggleEvents}
        >
          Whats On
        </button>
        <button className="private-hire-button" onClick={toggleHire}>
          Private Hire
        </button>
      </div>

      <div className="show-info">
        {showHire && <Hire />}

        {showEvents && (
          <>
            {user ? (
              <WhatsOn />
            ) : (
              <>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    marginTop: "40px",
                  }}
                >
                  To book events and enjoy exclusive member experiences, please
                  sign in to your account.
                </p>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Link to="/SignIn">
                    <button className="event-sign-in">Sign in</button>
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
