import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeInSection from "../animations/FadeInSection";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Header />
      <FadeInSection>
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
          <form onSubmit={handleSignIn}>
            <div className="mb-3 ">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                required
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="sign-in-button">
              Submit
            </button>
          </form>
        </div>
      </FadeInSection>
      <Footer />
    </>
  );
}
