// src/pages/checkout/UserDetailsForm.tsx
import React, { useEffect, useState } from "react";
import { getDeliveryCost } from "../../utils/getDeliveryCost";

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
  const [user, setUser] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleCalculateDelivery = async () => {
    if (!user.address || !user.city) {
      alert("Please signup/login.");
      return;
    }

    const fullAddress = `${user.address}, ${user.city}`;
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

  {/* Horizontal line under Buyer Info */}
  <hr className="border-t-2 border-black -mx-6 mb-4" />


   {/* Signup link */}
  {!isLoggedIn && (
    <p className="text-sm text-indigo-700 font-semibold cursor-pointer mb-4 text-right">
      Signup Here
    </p>
  )}

  <form className="grid grid-cols-1 gap-3">
    <input
      type="text"
      name="name"
      placeholder="First Name"
      value={user.name}
      onChange={handleChange}
      className="border rounded-md p-2 text-sm"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={user.email}
      onChange={handleChange}
      className="border rounded-md p-2 text-sm"
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone Number"
      value={user.phone}
      onChange={handleChange}
      className="border rounded-md p-2 text-sm"
    />
    <input
      type="text"
      name="address"
      placeholder="Address"
      value={user.address}
      onChange={handleChange}
      className="border rounded-md p-2 text-sm"
    />
    <input
      type="text"
      name="city"
      placeholder="City / State"
      value={user.city}
      onChange={handleChange}
      className="border rounded-md p-2 text-sm"
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
