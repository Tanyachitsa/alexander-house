import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ marginBottom: "30px" }}>
      <img
        className="logo"
        src="/src/Media/AlexanderHouse.png"
        alt="Alexander House logo"
      />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Houses">
          <li>Houses</li>
        </Link>
        <Link to="/Wellness">
          <li>Wellness</li>
        </Link>
        <Link to="/Events">
          <li>Events</li>
        </Link>
        <Link to="/Membership">
          <li>Membership</li>
        </Link>
      </ul>
      <Link to="/SignIn">
        <span className="sign-in">Sign in</span>
      </Link>
    </nav>
  );
}
