import { Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="min-h-[100vh] max-w-[100vw] w-[100%]  bg-[#DEC1F5] border-2 border-black flex flex-col justify-start items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
