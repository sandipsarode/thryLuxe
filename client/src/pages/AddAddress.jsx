import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

// Input Field Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    className="w-full px-3 py-2.5 border border-gray-500/30 rounded outline-none bg-transparent text-white placeholder-gray-400 focus:border-primary transition"
    required
  />
);

const AddAddress = () => {
  const { axios, user, navigate } = useAppContext();

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/address/add", {
        address,
        userId: user._id,
      });

      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, []);

  return (
    <div className="mx-4 md:mx-16 my-10">
      <p className="text-2xl font-bold uppercase">
        Add Shipping <span className="text-primary">Address</span>
      </p>
      <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Form Section */}
        <div className="flex-1 w-full bg-gray-900 rounded-2xl p-6 md:p-10 shadow-lg">
          <form
            onSubmit={onSubmitHandler}
            className="space-y-4 text-sm text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Enter Your Email"
            />

            <InputField
              handleChange={handleChange}
              address={address}
              name="street"
              type="text"
              placeholder="Street"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipcode"
                type="number"
                placeholder="Zip Code"
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="text"
              placeholder="Phone"
            />

            <button className="w-full mt-6 bg-white text-black py-3 rounded-lg hover:bg-primary hover:text-white transition uppercase font-semibold">
              Save Address
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            className="w-full max-w-[500px] h-auto object-contain"
            src={assets.add_address_iamge}
            alt="Address"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
