// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  User as FirebaseUser,
} from "firebase/auth";
import app from "../firebase";

interface AuthContextType {
  user: FirebaseUser | null;
  signup: (email: string, password: string, name?: string, number?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = getAuth(app);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      // Save basic info for checkout auto-fill
      if (firebaseUser) {
        localStorage.setItem(
          "sirlife_user",
          JSON.stringify({
            name: firebaseUser.displayName,
            email: firebaseUser.email,
          })
        );
      } else {
        localStorage.removeItem("sirlife_user");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const signup = async (email: string, password: string, name?: string, number?: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const currentUser = userCredential.user;
    if (name) await updateProfile(currentUser, { displayName: name });
    if (number) localStorage.setItem("userPhone", number);
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const firebaseUser = result.user;
    localStorage.setItem(
      "sirlife_user",
      JSON.stringify({
        name: firebaseUser.displayName,
        email: firebaseUser.email,
      })
    );
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("sirlife_user");
    localStorage.removeItem("userPhone");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export default AuthContext;
