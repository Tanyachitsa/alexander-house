import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Wellness() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
        - Gym and Wellness -
      </h1>
      <p
        style={{
          textAlign: "center",
          marginLeft: "250px",
          marginRight: "250px",
          marginBottom: "80px",
          marginTop: "25px",
          fontSize: "25px",
        }}
      >
        At Alexander House, wellness is woven into every detail. Our
        state-of-the-art gym offers premium equipment, personal training, and
        curated fitness classes designed for all levels. Step into our tranquil
        spa and wellness space to restore balance — with treatments, saunas, and
        relaxation areas crafted to rejuvenate body and mind. Whether you’re
        seeking energy or stillness, this is your sanctuary for everyday
        renewal.
      </p>
      <div class="container text-center" style={{ paddingTop: "30px" }}>
        <div class="row">
          <div class="col">
            <img
              src="/src/Media/gym.jpg"
              alt="picture of the gym"
              width={500}
              className="gymImg"
            />
          </div>
          <div class="col">
            <h2 style={{ color: "#3A2D2F" }}>Our Gym</h2>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "40px",
              }}
            >
              Our private gym features premium equipment, personal training, and
              space to move at your own pace. Designed for energy, strength, and
              everyday performance.
            </p>
            <h3> Opening Hours</h3>
            <p>
              Monday–Friday: 6:00 AM – 10:00 PM <br />
              Saturday–Sunday: 7:00 AM – 9:00 PM
            </p>
            <h5>Location</h5>
            <p>
              <strong>
                Alexander House <br />
                27 Curtain Row, Shoreditch, <br />
                London, E1 6FQ, United Kingdom
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div
        class="container text-center"
        style={{ paddingTop: "150px", paddingBottom: "200px" }}
      >
        <div class="row">
          <div class="col">
            <h2>Our Spa</h2>
            <p style={{ fontSize: "18px" }}>
              Step into calm with tailored treatments, saunas, and serene spaces
              for rest and renewal. Wellness at Alexander House is where we
              practice self-care and stillness.
            </p>
            <h3>Opening Hours</h3>
            <p>
              Monday–Friday: 8:00 AM – 8:00 PM <br />
              Saturday–Sunday: 9:00 AM – 7:00 PM
            </p>
            <h5>Location</h5>
            <p>
              <strong>
                Alexander House <br />
                14 Belgrave Crescent, Mayfair, <br />
                London, W1K 3EL, United Kingdom
              </strong>
            </p>
          </div>
          <div class="col">
            <img
              src="/src/Media/spa.jpg"
              alt="image of a sauna"
              className="spaImage"
              width={500}
            />
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img
              src="/src/Media/passes.jpg"
              alt="image of gym weights"
              height={500}
              style={{ paddingBottom: "20px" }}
            />
            <h3>Guest Passes</h3>
            <br />
            <p style={{ fontSize: "20px" }}>
              Members can invite guests to experience Alexander House’s wellness
              and fitness spaces. Guest passes offer limited access to select
              facilities and events.
            </p>
          </div>
          <div class="col">
            <img
              src="/src/Media/training.jpg"
              alt="image of 2 people in the gym"
              height={500}
              style={{ paddingBottom: "20px" }}
            />
            <h3>Personal Training</h3>
            <br />
            <p style={{ fontSize: "20px" }}>
              Achieve your goals with expert guidance. Our certified trainers
              offer bespoke one-on-one sessions tailored to your pace,
              preferences, and progress.
            </p>
          </div>
          <div class="col">
            <img
              src="/src/Media/classes.jpg"
              alt="image of a pilates studio"
              height={500}
              style={{ paddingBottom: "20px" }}
            />
            <h3>Classes</h3>
            <br />
            <p style={{ fontSize: "20px", color: "#3A2D2F" }}>
              From strength training to mindfulness and movement, our schedule
              features a curated mix of group classes led by top instructors —
              energising, grounding, and inspiring.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
