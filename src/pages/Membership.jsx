import Header from "../components/Header";
import Footer from "../components/Footer";
import MembershipForm from "../components/membershipForm";

export default function Membership() {
  return (
    <>
      <Header />
      <h1
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          paddingTop: "60px",
          color: "#4E3D3A",
        }}
      >
        - Membership -
      </h1>
      <p
        style={{
          textAlign: "center",
          marginLeft: "250px",
          marginRight: "250px",
          marginBottom: "150px",
          fontSize: "25px",
        }}
      >
        Becoming a member of Alexander House offers more than access — it’s an
        invitation to a refined way of living. With tiered memberships designed
        for different lifestyles, each member enjoys exclusive spaces, curated
        events, and a community of like-minded individuals who value privacy,
        purpose, and elevated experiences.
      </p>
      <div
        className="container text-center"
        style={{ marginTop: "50px", marginBottom: "100px" }}
      >
        <div className="row">
          <div className="col border membership-box" style={{ border: "" }}>
            <h3>Full Membership</h3>
            <br />
            <p>
              Unlimited access to all club facilities, events, gym, workspace, &
              guest passes for ages 35+
            </p>
            <br />
            <h6>
              Monthly Fee: <strong>£120</strong>
            </h6>
            <br />
            <h6>Annual Fee: </h6>
            <h3>£1300</h3>
          </div>
          <div className="col border membership-box">
            <h3>Under 35s Membership</h3>
            <br />
            <p>Same as Full, but discounted for members aged 18–34</p>
            <br />
            <h6>
              Monthly Fee: <strong>£85</strong>
            </h6>
            <br />
            <h6>Annual Fee: </h6>
            <h3>£920</h3>
          </div>
          <div className="col border membership-box">
            <h3>Corporate Membership</h3>
            <br />
            <p>
              Bulk membership for 5+ employees; shared workspace + event access
            </p>
            <br />
            <h6>
              Monthly Fee: <strong>£95/</strong>person
            </h6>
            <br />
            <h6>Annual Fee: </h6>
            <h3>£1050</h3>
          </div>
          <div className="col border membership-box">
            <h3>Stays Membership</h3>
            <br />
            <p>
              Includes Full + access to overnight suites or partnered houses (4
              free stays/year)
            </p>
            <br />
            <h6>
              Monthly Fee: <strong>£180</strong>
            </h6>
            <br />
            <h6>Annual Fee: </h6>
            <h3>£1950</h3>
          </div>
        </div>
      </div>
      <h4
        style={{
          textAlign: "center",
          paddingBottom: "20px",
          marginTop: "70px",
          fontSize: "30px",
          color: "#4E3D3A",
        }}
      >
        Additionals
      </h4>
      <ul style={{ marginBottom: "70px" }}>
        <li>
          <strong>Joining Fee:</strong> £150
        </li>
        <li>
          <strong>Guest Passes:</strong>£15/person
        </li>
        <li>
          <strong>Private Room Booking:</strong> £30/hour
        </li>
        <li>
          <strong>Venue Hire:</strong>from £30/person
        </li>
      </ul>
      <hr />
      <h1 style={{ textAlign: "center", marginTop: "60px", color: "#4E3D3A" }}>
        Membership Form
      </h1>

      <MembershipForm />
      <Footer />
    </>
  );
}
