import Header from "../components/Header";
import Footer from "../components/Footer";
export default function SignIn() {
  return (
    <>
      <Header />
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "80px",
        }}
      >
        - Sign In -
      </h1>

      <div className="sign-in-form">
        <form>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="sign-in-button">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
