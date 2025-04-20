import Header from "../components/Header";
import Footer from "../components/Footer";
import EuropeImages from "../components/EuropeImages";
import AfricaHouses from "../components/AfricaImage";
import OtherHouses from "../components/OtherImages";
import FadeInSection from "../animations/FadeInSection";

export default function Houses() {
  return (
    <>
      <Header />
      <FadeInSection>
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>- Houses -</h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: "50px",
            marginLeft: "250px",
            marginRight: "250px",
            marginTop: "50px",
            fontSize: "25px",
          }}
        >
          Experience <strong>timeless luxury</strong> with our curated overnight
          stays at Alexander House. Each suite blends elegant design with the
          comfort of home — featuring plush furnishings, private amenities, and
          thoughtful touches throughout. Whether you're seeking a quiet retreat,
          a romantic escape, or a refined base for your city visit, our
          accommodations offer the perfect balance of privacy, warmth, and
          sophistication.
        </p>
      </FadeInSection>
      <h2
        style={{
          textAlign: "center",
          textDecoration: "underline",
          paddingBottom: "20px",
          paddingTop: "50px",
        }}
      >
        - Europe -
      </h2>
      <EuropeImages />
      <h2
        style={{
          textAlign: "center",
          textDecoration: "underline",
          paddingBottom: "20px",
          paddingTop: "100px",
        }}
      >
        - Africa -
      </h2>
      <AfricaHouses />
      <h2
        style={{
          textAlign: "center",
          textDecoration: "underline",
          paddingBottom: "20px",
          paddingTop: "100px",
        }}
      >
        - Middle East and Caribbean -
      </h2>
      <OtherHouses />
      <Footer />
    </>
  );
}
