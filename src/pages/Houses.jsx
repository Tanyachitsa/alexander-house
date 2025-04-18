import Header from "../components/Header";
import Footer from "../components/Footer";
import HouseImages from "../components/houseImages";
export default function Houses() {
  return (
    <>
      <Header />
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
        thoughtful touches throughout. Whether you're seeking a quiet retreat, a
        romantic escape, or a refined base for your city visit, our
        accommodations offer the perfect balance of privacy, warmth, and
        sophistication.
      </p>

      <HouseImages />
      <Footer />
    </>
  );
}
