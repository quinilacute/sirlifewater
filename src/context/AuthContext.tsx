// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  type User as FirebaseUser,
} from "firebase/auth";
import app from "../firebase"; // your Firebase initialization

// 🧩 AuthContext Type
interface AuthContextType {
  user: FirebaseUser | null;
  signup: (email: string, password: string, name?: string, number?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

// ⚙️ Create Context
const AuthContext = createContext<AuthContextType | null>(null);

// 🌟 Auth Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = getAuth(app);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // 🔄 Watch user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, [auth]);

  // 🆕 Signup
  const signup = async (email: string, password: string, name?: string, number?: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const currentUser = userCredential.user;

    // Update displayName and optionally phone number
    if (name) {
      await updateProfile(currentUser, { displayName: name });
    }

    // Optionally store number in localStorage (frontend only)
    if (number) {
      localStorage.setItem("userPhone", number);
    }
  };

  // 🔐 Login
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // 🌍 Login with Google
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  // 🚪 Logout
  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("userPhone");
  };

  // 💡 Context values
  return (
    <AuthContext.Provider value={{ user, signup, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 🧠 Hook for components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export default AuthContext;
