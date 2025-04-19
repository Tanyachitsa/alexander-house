import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <img
        className="logo"
        src="/src/Media/AlexanderHouse.png"
        alt="Alexander House logo"
      />
      <ul>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/Houses" style={{ textDecorationLine: "none" }}>
          <li>Houses</li>
        </Link>
        <Link to="/Wellness" style={{ textDecorationLine: "none" }}>
          <li>Wellness</li>
        </Link>
        <Link to="/Events" style={{ textDecorationLine: "none" }}>
          <li>Events</li>
        </Link>
        <Link to="/Membership" style={{ textDecorationLine: "none" }}>
          <li>Membership</li>
        </Link>
      </ul>
      <Link
        to="/SignIn"
        style={{ textDecorationLine: "none", color: "#2A2A2A" }}
      >
        <div className="sign-in">Sign in</div>
      </Link>
    </nav>
  );
}
