import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { SIGNUP } from "../constants/routes";

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: SIGNUP,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
