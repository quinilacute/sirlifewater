interface AuthPanelProps {
  isSignUp: boolean;
  togglePanel: () => void;
}

function AuthPanel({ isSignUp, togglePanel }: AuthPanelProps) {
  return (
    <div className="text-center space-y-6 max-w-md">
      {isSignUp ? (
        <>
          <h2 className="text-4xl font-bold">Welcome Back 💧</h2>
          <p className="text-lg opacity-90">
            Already have an account? Sign in to continue.
          </p>
          <button
            onClick={togglePanel}
            className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100"
          >
            Sign In
          </button>
        </>
      ) : (
        <>
          <h2 className="text-4xl font-bold">Hello Friend 🌟</h2>
          <p className="text-lg opacity-90">
            New here? Enter your details to start your journey.
          </p>
          <button
            onClick={togglePanel}
            className="mt-6 px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl shadow-md hover:bg-gray-100"
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}

export default AuthPanel;
