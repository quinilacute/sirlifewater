import { useState } from "react";
import AuthPanel from "../components/AuthPanel";
import AuthForm from "../components/AuthForm";

function LoginSignup() {
  const [isSignUp, setIsSignUp] = useState(false);

  const togglePanel = () => setIsSignUp((prev) => !prev);

  return (
    <div className="flex h-screen transition-all duration-700">
      {/* Left / Right Panel */}
      <div
        className={`flex-1 flex items-center justify-center p-10 text-white transition-all duration-700 ${
          isSignUp
            ? "bg-gradient-to-r from-blue-600 to-indigo-500 order-2"
            : "bg-gradient-to-r from-yellow-500 to-orange-400"
        }`}
      >
        <AuthPanel isSignUp={isSignUp} togglePanel={togglePanel} />
      </div>

      {/* Form Section */}
      <div
        className={`flex-1 flex items-center justify-center bg-white transition-all duration-700 ${
          isSignUp ? "order-1" : ""
        }`}
      >
        <AuthForm isSignUp={isSignUp} />
      </div>
    </div>
  );
}

export default LoginSignup;
