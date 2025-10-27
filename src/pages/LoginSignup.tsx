import React, { useState } from "react";
import AuthPanel from "../components/AuthPanel";
import AuthForm from "../components/AuthForm";

const LoginSignup: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const togglePanel = () => setIsSignUp((prev) => !prev);

  return (
    <div className="flex flex-col md:flex-row h-screen transition-all duration-700 overflow-hidden">
      {/* Left / Right Gradient Panel */}
      <div
        className={`flex-1 flex items-center justify-center p-10 text-white transition-all duration-700 ease-in-out ${
          isSignUp
            ? "bg-gradient-to-br from-blue-600 to-indigo-500 md:order-2"
            : "bg-gradient-to-br from-yellow-500 to-orange-500"
        }`}
      >
        <AuthPanel isSignUp={isSignUp} togglePanel={togglePanel} />
      </div>

      {/* Form Section */}
      <div
        className={`flex-1 flex items-center justify-center bg-gray-50 transition-all duration-700 ease-in-out ${
          isSignUp ? "md:order-1" : ""
        }`}
      >
        <AuthForm isSignUp={isSignUp} />
      </div>
    </div>
  );
};

export default LoginSignup;
