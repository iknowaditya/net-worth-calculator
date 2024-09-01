import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_URL;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        `${apiUrl}/v1/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // console.log(response.data);
      setLoading(false);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError(error.response.data);
      setLoading(false);
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
            Register
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Name
              </label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
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
            <div className="mb-4">
              <label
                className="block"
                style={{ color: "hsl(var(--foreground))" }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              Register
            </button>
          </form>
        </div>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Net Worth Generator. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <button className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </button>
          <button className="text-xs hover:underline underline-offset-4">
            Privacy
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default Register;
