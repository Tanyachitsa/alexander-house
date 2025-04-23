import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import { auth } from "../data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LogOut from "../pages/SignOut";

export default function Header() {
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };
  return (
    <nav>
      <img
        className="logo"
        src="/media/AlexanderHouse.png"
        alt="Alexander House logo"
      />
      <motion.ul
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
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
      </motion.ul>
      {user ? (
        <div
          className="user-info"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <FontAwesomeIcon icon={faUser} className="header-icon" />
          <br />
          <Link to="/logout">
            <p className="logout-button">Log out</p>
          </Link>
        </div>
      ) : (
        <Link
          to="/SignIn"
          style={{ textDecorationLine: "none", color: "#2A2A2A" }}
        >
          <div className="sign-in">Sign in</div>
        </Link>
      )}
    </nav>
  );
}
