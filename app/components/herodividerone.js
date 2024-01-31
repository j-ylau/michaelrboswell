import React from "react";
import Paper from "@mui/material/Paper";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import BookIcon from "@mui/icons-material/Book";
import CityIcon from "@mui/icons-material/LocationCity";

const HeroDivider = () => {
  return (
    <section className="flex flex-wrap items-center bg-orange-100 font-sans">
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-4">
        <span className="text-xs font-medium uppercase text-emerald-600">
          Essential Reading
        </span>
        <h2 className="text-xl lg:text-2xl font-bold mb-3 mt-1 text-emerald-800">
          <EnergySavingsLeafIcon className="mr-2" />
          Climate Action Planning
        </h2>
        <div className="mt-4 w-full lg:w-64 inline-block flex items-center justify-center bg-emerald-800 text-white text-sm px-5 py-2 rounded hover:bg-emerald-700 transition-colors">
          <a href="/climate-action-planning" className="text-center">
            Learn More
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 flex flex-col items-center p-4">
          <CityIcon className="text-emerald-600 mb-2" style={{ fontSize: "2.5em" }} />
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">
            Urban Strategies
          </h3>
          <p className="text-center text-emerald-800 text-sm">
            Strategies for creating low-carbon, resilient communities.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center p-4">
          <BookIcon className="text-emerald-600 mb-2" style={{ fontSize: "2.5em" }} />
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">
            Complete Manual
          </h3>
          <p className="text-center text-emerald-800 text-sm">
            Includes policy instruments, communication strategies, and vulnerability assessments.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center p-4">
          <EnergySavingsLeafIcon className="text-emerald-600 mb-2" style={{ fontSize: "2.5em" }} />
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">
            Climate Action
          </h3>
          <p className="text-center text-emerald-800 text-sm">
            Focused on reducing emissions and enhancing resilience against climate impacts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroDivider;
