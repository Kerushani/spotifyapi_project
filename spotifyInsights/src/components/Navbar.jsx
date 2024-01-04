import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as ROUTES from "../constants/routes.js"

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center rounded-lg bg-[#3B7854]">
        <Link to={ROUTES.HOME}>spotifyInsights</Link>
        <Link to={ROUTES.PROFILE}>Profile</Link>
        <Link to={ROUTES.SIGNUP}>Sign Up</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
