import React from "react";
import Paper from "@mui/material/Paper";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import BookIcon from "@mui/icons-material/Book";
import CityIcon from "@mui/icons-material/LocationCity";

const HeroDivider = () => {
  return (
    <section className="flex flex-wrap items-center justify-center bg-gray-100 text-gray-800 text-center lg:text-left">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-6 lg:p-12">
        <span className="text-sm lg:text-base font-semibold uppercase tracking-wide text-gray-600">
          Essential Reading
        </span>
        <h2 className="text-2xl lg:text-3xl font-extrabold my-3 text-gray-800 flex items-center justify-center lg:justify-start">
          <EnergySavingsLeafIcon className="mr-2 text-emerald-800" fontSize="large" />
          Climate Action Planning
        </h2>
        <a href="https://islandpress.org/books/climate-action-planning" className="mt-5 font-semibold inline-block bg-emerald-800 hover:bg-emerald-900 text-white rounded-md text-sm px-6 py-3 transition duration-300 ease-in-out" target="_blank">
          See Book
        </a>
      </div>
      <div className="w-full lg:w-1/2 flex flex-wrap justify-center p-4 lg:p-8">
        {[{ Icon: CityIcon, title: "Urban Strategies", text: "Strategies for creating low-carbon, resilient communities." },
          { Icon: BookIcon, title: "Complete Manual", text: "Includes policy instruments, communication strategies, and vulnerability assessments." },
          { Icon: EnergySavingsLeafIcon, title: "Climate Action", text: "Focused on reducing emissions and enhancing resilience against climate impacts." }]
          .map(({ Icon, title, text }, index) => (
            <div key={index} className="w-full md:w-1/3 flex flex-col items-center p-4">
              <Icon className="text-emerald-800 mb-3" style={{ fontSize: "3em" }} />
              <h3 className="text-lg font-semibold mb-2">
                {title}
              </h3>
              <p className="text-center text-sm">
                {text}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default HeroDivider;
