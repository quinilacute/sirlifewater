// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { 
  getAuth, 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import type { User as FirebaseUser } from "firebase/auth";

import app from "../firebase"; // your Firebase initialization file

// 1️⃣ Define the Auth context type
interface AuthContextType {
  user: FirebaseUser | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// 2️⃣ Create Context
const AuthContext = createContext<AuthContextType | null>(null);

// 3️⃣ Auth Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = getAuth(app);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // 4️⃣ Listen for Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, [auth]);

  // 5️⃣ Auth methods
  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  // 6️⃣ Provide context values
  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 7️⃣ Hook to use Auth in components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

// ✅ Keep export default at the bottom (your style)
export default AuthContext;
