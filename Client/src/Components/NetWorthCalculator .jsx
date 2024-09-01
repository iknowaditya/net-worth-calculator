import { useState } from "react";
import { Input } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_URL;

const NetWorthCalculator = () => {
  const [formData, setFormData] = useState({
    realEstate: "",
    checkingAccounts: "",
    savingsAccounts: "",
    retirementAccounts: "",
    autos: "",
    otherAssets: "",
    mortgages: "",
    consumerDebt: "",
    personalLoans: "",
    studentLoans: "",
    autoLoans: "",
    otherDebt: "",
  });
  const [netWorth, setNetWorth] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );

    if (!allFieldsFilled) {
      // Show a toast alert if any field is empty
      toast.error("All fields are mandatory!");
      return;
    }

    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    // Calculate assets and liabilities
    const assets = {
      realEstate: parseFloat(formData.realEstate) || 0,
      checkingAccounts: parseFloat(formData.checkingAccounts) || 0,
      savingsAccounts: parseFloat(formData.savingsAccounts) || 0,
      retirementAccounts: parseFloat(formData.retirementAccounts) || 0,
      autos: parseFloat(formData.autos) || 0,
      otherAssets: parseFloat(formData.otherAssets) || 0,
    };
    const liabilities = {
      mortgages: parseFloat(formData.mortgages) || 0,
      consumerDebt: parseFloat(formData.consumerDebt) || 0,
      personalLoans: parseFloat(formData.personalLoans) || 0,
      studentLoans: parseFloat(formData.studentLoans) || 0,
      autoLoans: parseFloat(formData.autoLoans) || 0,
      otherDebt: parseFloat(formData.otherDebt) || 0,
    };

    // Calculate total assets and total liabilities
    const totalAssetsValue = Object.values(assets).reduce(
      (total, value) => total + value,
      0
    );
    const totalLiabilitiesValue = Object.values(liabilities).reduce(
      (total, value) => total + value,
      0
    );
    const calculatedNetWorth = totalAssetsValue - totalLiabilitiesValue;

    // Send data to server
    try {
      const response = await axios.post(`${apiUrl}/api/networth`, {
        userId: userId, // Replace with actual user ID
        assets,
        liabilities,
      });

      // console.log(response.data);
      setTotalAssets(totalAssetsValue);
      setTotalLiabilities(totalLiabilitiesValue);
      setNetWorth(calculatedNetWorth);
      setShowResults(true);
      // console.log("Total Assets:", totalAssetsValue);
      // console.log("Total Liabilities:", totalLiabilitiesValue);
      // console.log("Calculated Net Worth:", calculatedNetWorth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto bg-background">
              <h1 className="text-3xl font-bold text-center mb-16">
                Net Worth Calculator
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Assets Section */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Your Assets</h2>
                    {[
                      { label: "Real Estate", name: "realEstate" },
                      { label: "Checking Accounts", name: "checkingAccounts" },
                      { label: "Savings Accounts", name: "savingsAccounts" },
                      {
                        label: "Retirement Accounts",
                        name: "retirementAccounts",
                      },
                      { label: "Autos", name: "autos" },
                      { label: "Other Assets", name: "otherAssets" },
                    ].map((asset, idx) => (
                      <div className="mb-2" key={idx}>
                        <label className="block text-gray-500">
                          {asset.label}
                        </label>
                        <Input
                          type="number"
                          name={asset.name}
                          value={formData[asset.name]}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Liabilities Section */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Your Liabilities
                    </h2>
                    {[
                      { label: "Mortgages", name: "mortgages" },
                      { label: "Consumer Debt", name: "consumerDebt" },
                      { label: "Personal Loans", name: "personalLoans" },
                      { label: "Student Loans", name: "studentLoans" },
                      { label: "Auto Loans", name: "autoLoans" },
                      { label: "Other Debt", name: "otherDebt" },
                    ].map((liability, idx) => (
                      <div className="mb-2" key={idx}>
                        <label className="block text-gray-500">
                          {liability.label}
                        </label>
                        <Input
                          type="number"
                          name={liability.name}
                          value={formData[liability.name]}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground text-2xl font-bold p-3 rounded-md hover:bg-primary/90 transition"
                  >
                    <h3>Calculate Net Worth</h3>
                  </button>
                </div>
              </form>

              <Transition
                show={showResults}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="mt-6 space-y-4 text-center">
                  <div className="bg-gray-800 text-white p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-blue-400 ">
                        Total Assets: ₹{totalAssets.toLocaleString()}
                      </p>
                      <p className="text-lg font-semibold text-red-400">
                        Total Liabilities: ₹{totalLiabilities.toLocaleString()}
                      </p>
                      <p className="text-2xl font-bold text-green-400 border p-2">
                        Your Net Worth is: ₹{netWorth.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NetWorthCalculator;
