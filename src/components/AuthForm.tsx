import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface AuthFormProps {
  isSignUp: boolean;
}

function AuthForm({ isSignUp }: AuthFormProps) {
  const { signup, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg w-96 text-center">
      <h2 className="text-2xl font-bold mb-6">
        {isSignUp ? "Create Account" : "Sign In"}
      </h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <button
          type="submit"
          className={`w-full py-2 rounded-md text-white ${
            isSignUp
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
