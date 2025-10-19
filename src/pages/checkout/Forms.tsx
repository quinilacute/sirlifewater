import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

const UserDetailsForm: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Load user data (simulate pulling from localStorage or AuthContext)
  useEffect(() => {
    const savedUser = localStorage.getItem("sirlife_user");
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("sirlife_user", JSON.stringify(user));
    alert("Details saved successfully ✅");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Customer Details</h2>

      {!isLoggedIn ? (
        <div className="text-center py-4">
          <p className="text-gray-600 mb-3">
            Please sign up or log in to continue your checkout.
          </p>
          <button
            onClick={handleLoginRedirect}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up / Log In
          </button>
        </div>
      ) : (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. +234 801 234 5678"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              City / Location
            </label>
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Lagos, Abuja"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Delivery Address
            </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
              placeholder="Street name, house number, landmark"
            />
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="button"
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Save Details
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserDetailsForm;
