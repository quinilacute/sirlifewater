import React from "react";

interface AuthPanelProps {
  isSignUp: boolean;
  togglePanel: () => void;
}

const AuthPanel: React.FC<AuthPanelProps> = ({ isSignUp, togglePanel }) => {
  return (
    <div className="text-center space-y-6 max-w-md px-6">
      {isSignUp ? (
        <>
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            Welcome Back 💧
          </h2>
          <p className="text-lg opacity-90 text-white/90">
            Already have an account? Sign in to continue your journey.
          </p>
          <button
            onClick={togglePanel}
            className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Sign In
          </button>
        </>
      ) : (
        <>
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            Hello Friend 🌟
          </h2>
          <p className="text-lg opacity-90 text-white/90">
            New here? Enter your details to start your journey with us.
          </p>
          <button
            onClick={togglePanel}
            className="mt-8 px-8 py-3 bg-white text-orange-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default AuthPanel;
