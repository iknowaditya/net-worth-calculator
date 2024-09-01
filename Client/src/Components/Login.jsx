import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";

const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/v1/login`, {
        email,
        password,
      });
      // console.log(response.data);
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div
          className="w-full max-w-md p-8 rounded shadow-md"
          style={{
            backgroundColor: "hsl(var(--card))",
            color: "hsl(var(--card-foreground))",
          }}
        >
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "hsl(var(--primary))" }}
          >
            Login
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
              }}
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
