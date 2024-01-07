import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import SignUp from "./pages/SignUp.jsx";
import SpotifyPage from "./pages/SpotifyPage.jsx";

import Button from "react-bootstrap/Button";
import Navbar from "./components/Navbar.jsx";

import * as ROUTES from "./constants/routes.js";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { isLoading } = useAuth();
  return isLoading ? (
    <h1>Page is loading</h1>
  ) : (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SPOTIFYLOGIN} element={<SpotifyPage />} />
        </Routes>

        {/* <Button variant="primary">Test button</Button> */}
      </div>
    </Router>
  );
}

export default App;
