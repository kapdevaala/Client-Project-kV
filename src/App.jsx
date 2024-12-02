import { Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <div className="min-h-[100vh] max-w-[100vw] w-[100%]  bg-[#F2F0F1] border-2 border-black flex flex-col justify-start items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
