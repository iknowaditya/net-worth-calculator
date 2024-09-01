import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NetWorthCalculator from "./Components/NetWorthCalculator ";
import Hero from "./Components/Hero";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #001F3D",
            padding: "16px",
            color: "#ffffff",
            backgroundColor: "#001F3D",
          },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/calculator" element={<NetWorthCalculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
