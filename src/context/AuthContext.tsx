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
import app from "../firebase"; // make sure this exports your Firebase app

// 1️⃣ Define the shape of the Auth context
interface AuthContextType {
  user: FirebaseUser | null;
  signup: (email: string, password: string, name?: string, number?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

// 2️⃣ Create context
const AuthContext = createContext<AuthContextType | null>(null);

// 3️⃣ Provide the context
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // 4️⃣ Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);

      // Save minimal info for checkout autofill
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

  // 5️⃣ Sign up
  const signup = async (email: string, password: string, name?: string, number?: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const currentUser = userCredential.user;

    if (name) {
      await updateProfile(currentUser, { displayName: name });
    }

    if (number) localStorage.setItem("userPhone", number);
  };

  // 6️⃣ Login
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // 7️⃣ Login with Google
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

  // 8️⃣ Logout
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
};

// 9️⃣ Custom hook to use Auth
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default AuthContext;
