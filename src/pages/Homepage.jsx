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
      ></video>{" "}
      <Footer />
    </>
  );
}
