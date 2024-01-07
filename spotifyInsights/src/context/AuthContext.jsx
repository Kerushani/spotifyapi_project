import { useContext, createContext, useState, useEffect } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail  } from "@firebase/auth";

const AuthContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null);
  const {firebase} = useContext(FirebaseContext)
  console.log(firebase)
  const auth = getAuth(firebase)
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = ({email, password, callback}) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        callback();
        return response.user;
      });
  };
  const signup = ({email, password, callback}) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
        callback();
        return response.user;
      });
  };
  const signout = () => {
    return firebase
      .signOut()
      .then(() => {
        setUser(false);
      });
  };
  // const sendPasswordResetEmail = (email) => {
  //   return sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };
  // const confirmPasswordReset = (code, password) => {
  //   return firebase
  //     .confirmPasswordReset(code, password)
  //     .then(() => {
  //       return true;
  //     });
  // };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      setIsLoading (false)
    });
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    isLoading,
    user,
    signin,
    signup,
    signout,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}