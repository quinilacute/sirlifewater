// src/pages/checkout/UserDetailsForm.tsx
import React, { useEffect, useState } from "react";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}

const UserDetailsForm: React.FC = () => {
  const [user, setUser] = useState<UserInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-md font-bold text-gray-700 uppercase">
          Buyer Info
        </h2>
        {!isLoggedIn && (
          <p className="text-sm text-indigo-700 font-semibold cursor-pointer">
            Signup Here
          </p>
        )}
      </div>

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
    </div>
  );
};

export default UserDetailsForm;
