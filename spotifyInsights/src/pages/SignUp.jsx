import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FirebaseContext } from "../context/FirebaseContext";
import { getAuth } from "@firebase/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useAuth } from "../context/AuthContext";
// import { useHistory } from "react-router-dom"
import * as ROUTES from "../constants/routes.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  return (
    <div className="mt-[5%]">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        //   auth.signup({email, password, callback: () => useHistory.push(ROUTES.PROFILE)})
          auth.signup({email, password, callback: () => {}})
            .then(() => alert("signed up!"))
            .catch((error) => alert(error.message));
          setEmail("");
          setPassword("");
        }}
      >
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <label for="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-describedby="passwordHelpBlock"
        />

        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </div>

        <button className="btn btn-primary" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
