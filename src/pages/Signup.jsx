import { useNavigate } from "react-router-dom";
import link from "../assets/login-page.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    accountType: "Customer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    setLoading(true);

    try {
      const resp = await fetch(
        "https://backend-project-kv.onrender.com/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const response = await resp.json();
      console.log("Response", response);
      if (resp.ok) {
        console.log("Navigating");
        toast.success("User Registered Successfully");
        navigate("/signin");
      } else {
        console.log("Error in connecting ");
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      toast.error(response.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[100%] max-w-[1500px]   min-h-[90vh]  flex justify-center items-center  ">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className=" border-red-950  p-2 flex justify-evenly  min-h-[700px] h-[100%] max-w-[1000px] w-[100%]">
          <div className=" border-green-800 max-w-[500px] w-[100%] flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="bg-[white] shadow-xl  max-w-[500px] w-full flex flex-col gap-10 items-center  p-6 rounded-3xl h-[100%] text-2xl"
            >
              <h2 className="text-4xl  text-gray-800 mt-[60px]  text-center font-bold">
                Please Register
              </h2>
              <div className="w-full">
                <label className="block  font-medium text-gray-700 mb-2">
                  UserName
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter UserName"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="w-full">
                <label className="block  font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="w-full">
                <label className="block  font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer"
              >
                Sign Up
              </button>
            </form>
          </div>

          <div className="hidden md:flex ml-4   max-w-[500px] w-[100%] relative">
            <div className="h-[100%] w-[100%] absolute">
              <img
                src={link}
                alt="logo"
                className="h-[100%] w-[100%] cursor-pointer rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
