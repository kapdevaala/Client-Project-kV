import { useNavigate } from "react-router";
import logo from "../assets/Logo.png";
import { useSelector } from "react-redux";

export function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  console.log("User", user);
  console.log("Token", token);
  return (
    <div className="w-[100%] max-w-[1800px] h-[60px] flex flex-row  md:justify-around justify-evenly items-center border-black    border-b-4  mt-4">
      <div className="min-w-[100px]  h-[100%] flex md:justify-start justify-center items-center  text-4xl  mb-2 ">
        <img
          src={logo}
          alt="logo"
          className="h-[100%] w-[100%] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="hidden   h-[100%] md:flex gap-4  justify-evenly items-center  ">
        <button className=" p-2 rounded-2xl text-[#3C3C3C]  hover:bg-[#3C3C3C] hover:text-white">
          Contact
        </button>
        {user ? (
          <button
            className=" p-2 rounded-2xl text-[#3C3C3C]  hover:bg-[#3C3C3C] hover:text-white"
            onClick={() => navigate("/cart")}
          >
            Cart
          </button>
        ) : (
          <button
            className=" p-2 rounded-2xl text-[#3C3C3C]  hover:bg-[#3C3C3C] hover:text-white"
            onClick={() => navigate("/signin")}
          >
            Login
          </button>
        )}
        {user ? (
          <button
            className=" p-2 rounded-2xl text-[#3C3C3C]  hover:bg-[#3C3C3C] hover:text-white"
            onClick={() => navigate("/cart")}
          >
            Profile
          </button>
        ) : (
          <button
            className=" p-2 rounded-2xl text-[#3C3C3C]  hover:bg-[#3C3C3C] hover:text-white"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
        )}
      </div>
    </div>
  );
}
