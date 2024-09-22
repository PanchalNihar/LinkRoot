import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-grow w-full">
        {/* Hero Section */}
        <div className="hero h-screen bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 flex items-center justify-center">
          <div className="hero-content text-center">
            <div className="max-w-xl bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-md shadow-xl transform transition duration-500 hover:scale-105">
              <h1 className="text-6xl text-white font-extrabold mb-4">
                Unleash Your Potential
              </h1>
              <p className="py-6 text-gray-200 leading-relaxed">
                Drive traffic to all your important links with one powerful tool.
              </p>
              <Link
                to="/register"
                className="btn btn-primary px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <section className="text-gray-800 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            {[
              {
                step: "1",
                title: "Sign up for a LinkRoot account.",
                description:
                  "You can sign up for a free LinkRoot account or choose a paid plan that offers additional features.",
                iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
              },
              {
                step: "2",
                title: "Give your link a title",
                description:
                  "The title will appear as a button on your LinkRoot, and the description will appear below the button.",
                iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
              },
              {
                step: "3",
                title: "Add your links",
                description:
                  "Click on the 'Create' button and enter the URL of the website or social media profile you want to link to.",
                iconPath:
                  "M12 22V8M5 12H2a10 10 0 0020 0h-3",
              },
              {
                step: "4",
                title: "Save your changes.",
                description:
                  "Once you've added all of your links, click on the 'Update' button. Your LinkRoot link is now live and you can start sharing it with your followers.",
                iconPath: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 110 8",
              },
            ].map(({ step, title, description, iconPath }, index) => (
              <div
                key={step}
                className={`flex relative pb-20 sm:items-center md:w-2/3 mx-auto ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">
                  {step}
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 bg-cyan-100 text-teal-500 rounded-full inline-flex items-center justify-center shadow-lg transform transition duration-500 hover:rotate-6 hover:scale-110">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                    >
                      <path d={iconPath}></path>
                    </svg>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-semibold title-font text-gray-900 mb-1 text-2xl">
                      {title}
                    </h2>
                    <p className="leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
