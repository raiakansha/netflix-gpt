import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="p-12 absolute bg-black bg-opacity-80 w-3/12 my-36 right-0 left-0 mx-auto text-white ">
        <h1 className="text-5xl font-medium p-4 my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-5 my-4 w-full bg-gray-700 text-xl rounded-md"
          />
        )}

        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p-5 my-4 w-full bg-gray-700 text-xl rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-5 my-4 w-full bg-gray-700 text-xl rounded-md"
        />
        <button className="p-5 my-6 bg-red-700 w-full rounded-md text-2xl font-semibold cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-lg cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
