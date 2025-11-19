// src/pages/checkout/UserDetailsForm.tsx
import React, { useEffect, useState } from "react";
import { getDeliveryCost } from "../../utils/getDeliveryCost";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

interface UserDetailsFormProps {
  onDeliveryCostChange: (cost: number, distance: string) => void;
}

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({ onDeliveryCostChange }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prefill user info from auth or localStorage
  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.displayName || "",
        email: user.email || "",
        phone: localStorage.getItem("userPhone") || "",
        address: "",
        city: "",
      });
      setIsLoggedIn(true);
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculateDelivery = async () => {
    if (!userInfo.address || !userInfo.city) {
      alert("Please enter your address and city.");
      return;
    }

    const fullAddress = `${userInfo.address}, ${userInfo.city}`;
    setLoading(true);

    try {
      const { distanceText, deliveryCost } = await getDeliveryCost(fullAddress);
      onDeliveryCostChange(deliveryCost, distanceText);
    } catch (error) {
      console.error(error);
      alert("Unable to calculate delivery cost. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md border border-black">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-md font-bold text-gray-700 uppercase">Buyer Info</h2>
      </div>

      <hr className="border-t-2 border-black -mx-6 mb-4" />

      {/* Signup/Login Link */}
      {!isLoggedIn && (
        <p
          onClick={() => navigate("/login")}
          className="text-sm text-indigo-700 font-semibold cursor-pointer mb-4 text-right"
        >
          Signup / Login Here
        </p>
      )}

      <form className="grid grid-cols-1 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={userInfo.name}
          onChange={handleChange}
          className="border rounded-md p-2 text-sm"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleChange}
          className="border rounded-md p-2 text-sm"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={userInfo.phone}
          onChange={handleChange}
          className="border rounded-md p-2 text-sm"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={userInfo.address}
          onChange={handleChange}
          className="border rounded-md p-2 text-sm"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City / State"
          value={userInfo.city}
          onChange={handleChange}
          className="border rounded-md p-2 text-sm"
          required
        />
      </form>

      <button
        type="button"
        onClick={handleCalculateDelivery}
        disabled={loading}
        className="mt-4 bg-indigo-900 text-white py-2 rounded-md w-full hover:bg-indigo-800 transition"
      >
        {loading ? "Calculating..." : "Calculate Delivery Cost"}
      </button>
    </div>
  );
};

export default UserDetailsForm;
