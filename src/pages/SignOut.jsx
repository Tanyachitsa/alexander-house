import React, { useEffect } from "react";
import { auth } from "../data/firebase";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await auth.signOut();
        setTimeout(() => {
          navigate("/SignIn");
        }, 2000);
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>You’ve been signed out.</h2>
      <p>Redirecting you shortly...</p>
    </div>
  );
}
