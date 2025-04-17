import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
}
