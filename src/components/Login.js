import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import Header from "./Header";
import { auth } from "../utils/firebase";
import { LOGIN_BG } from "../utils/asset-urls";
import { checkValidData } from "../utils/validate";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleAuthentication = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setMessage(message);
    
    if (!message) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: userName.current.value,
            }).then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setMessage(errorCode + "-" + errorMessage);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorCode + "-" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then(() => {})
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${LOGIN_BG})` }}
    >
      <Header />
      <div className="h-full flex-grow flex items-center justify-center">
        <div className="w-full max-w-md bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
          <p className="text-white text-xl ml-8 font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          <form
            className="flex flex-col m-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {!isSignInForm && (
              <input
                ref={userName}
                type="text"
                placeholder="Full Name
              "
                className="p-2 mb-8 rounded border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-2 mb-8 rounded border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 mb-6 rounded border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-white"
            />
            {message && <p className="text-red-600 text-sm mb-4">{message}</p>}
            <button
              onClick={handleAuthentication}
              className="w-full rounded-lg bg-red-600 text-white py-2 font-semibold"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="my-3 text-white text-center">OR</p>
            <button className="w-full rounded-lg bg-gray-400 text-white py-2 font-semibold bg-opacity-65">
              Use a sign-in code
            </button>
            <p className="my-5 text-white text-center">Forgot Password ?</p>
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 border-gray-300 accent-gray-500"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-sm font-medium text-white"
              >
                Remember me
              </label>
            </div>
            <p className="mt-5 text-white" onClick={handleSignInForm}>
              {isSignInForm ? (
                <>
                  New to Netflix? <b>Sign up now.</b>
                </>
              ) : (
                <>
                  Already a member? <b>Sign in.</b>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
