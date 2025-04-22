import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Houses from "./pages/Houses";
import Membership from "./pages/Membership";
import SignIn from "./pages/SignIn";
import Wellness from "./pages/Wellness";
import Events from "./pages/Events";
import LogOut from "./pages/SignOut";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Houses" element={<Houses />} />
        <Route path="/Wellness" element={<Wellness />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </>
  );
}
