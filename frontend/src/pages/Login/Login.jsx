import { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../public/images/login2.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { email, password, role });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#818a60ff] text-center mb-6">Welcome Back!</h2>
          <p className="text-lg text-gray-600 text-center mb-6">Signup to continue your health journey</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e3ff7dff] focus:outline-none text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e3ff7dff] focus:outline-none text-lg"
              />
            </div>

            

            <button
              type="submit"
              className="w-full bg-[#acba77ff] hover:bg-green-700 text-white font-semibold py-3 rounded-lg text-lg transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-md text-gray-600 text-center mt-6">
            Create an account?{" "}
            <Link to="/signup" className="text-green-600 font-semibold hover:underline">
              Signup
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-10 bg-green-200">
          <img src={loginImage} alt="Login" className="w-full max-w-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
