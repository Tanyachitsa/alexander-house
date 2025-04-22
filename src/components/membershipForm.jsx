import React from "react";
import { auth } from "../data/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default function MembershipForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage(
        `Hi ${firstName}, your sign up is successful.  Please log in.`
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Membership Sign Up
      </h1>
      <div className="membershipForm">
        {successMessage ? (
          <p className="success-message">{successMessage}</p>
        ) : (
          <form onSubmit={handleSignup}>
            <label htmlFor="firstName" style={{ marginBottom: "20px" }}>
              First Name <br />
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <br />
            <label htmlFor="secondName" style={{ marginBottom: "20px" }}>
              Last Name <br />
              <input
                type="text"
                name="secondName"
                placeholder="Last name"
                required
              />
            </label>
            <br />
            <label htmlFor="contactNumber" style={{ marginBottom: "20px" }}>
              Contact Number: <br />
              <input
                type="tel"
                name="contactNumber"
                pattern="[0-9]{10,15}"
                placeholder="Phone number"
                required
              />
            </label>
            <br />
            <label htmlFor="email" style={{ marginBottom: "20px" }}>
              Email <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <label htmlFor="password">
              Create a password <br />
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <fieldset style={{ marginTop: "80px" }}>
              <legend>Which membership best suits you?</legend>

              <select
                className="form-select"
                aria-label="memebrship select option"
                required
              >
                <option defaultValue={""}>Select one of the options</option>
                <option value="fullMembership">Full Membership</option>
                <option value="under35">Under 35s</option>
                <option value="staysMembership">Stays Membership</option>
                <option value="corporateMembership">
                  Corporate Membership
                </option>
              </select>
            </fieldset>

            <br />
            <button
              className="button-submit"
              style={{
                borderRadius: "10px",
                padding: "7px",
                margin: "10px",
              }}
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </>
  );
}
