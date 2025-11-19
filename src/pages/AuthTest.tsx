import { useAuth } from "../context/AuthContext";

export default function AuthTest() {
  const { user, signup, login, loginWithGoogle, logout } = useAuth();

  const testSignup = async () => {
    try {
      await signup("testuser@example.com", "password123", "Test User", "09012345678");
      alert("Signup successful!");
    } catch (err) {
      alert("Signup error: " + err);
    }
  };

  const testLogin = async () => {
    try {
      await login("testuser@example.com", "password123");
      alert("Login successful!");
    } catch (err) {
      alert("Login error: " + err);
    }
  };

  const testGoogle = async () => {
    try {
      await loginWithGoogle();
      alert("Google login successful!");
    } catch (err) {
      alert("Google login error: " + err);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Auth Test Page</h1>

      <button onClick={testSignup} className="bg-black text-white px-4 py-2 rounded">
        Test Signup
      </button>

      <button onClick={testLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
        Test Login
      </button>

      <button onClick={testGoogle} className="bg-red-600 text-white px-4 py-2 rounded">
        Test Google Login
      </button>

      <button onClick={logout} className="bg-gray-600 text-white px-4 py-2 rounded">
        Logout
      </button>

      <div className="mt-4 p-4 border rounded bg-gray-100">
        <h2 className="font-semibold">Current User:</h2>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}
