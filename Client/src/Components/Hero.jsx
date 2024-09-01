import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Hero = () => {
  const navigate = useNavigate();

  const handleGenerateNetWorth = () => {
    const token = localStorage.getItem("token");

    if (token) {
      // If token exists, navigate to the calculator page
      navigate("/calculator");
    } else {
      // If no token, redirect to login page
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Calculate Your Net Worth
              </h1>
              <p className="max-w-[700px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get a comprehensive overview of your financial health by
                generating your personalized net worth report.
              </p>
              <div>
                <button
                  onClick={handleGenerateNetWorth}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm sm:text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Generate Net Worth
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hero;
