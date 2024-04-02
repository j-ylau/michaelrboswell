import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-wrap justify-center items-center w-full p-8 md:p-36 font-sans bg-white">
      <div className="w-full lg:max-w-lg mx-auto mb-8 md:mb-0">
        <Image
          src="/assets/globe.png"
          alt="Climate Action"
          width={600}
          height={475}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="w-full lg:max-w-lg flex flex-col justify-center items-center text-center md:items-start md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-emerald-600">
          California Climate Action Planning Database
        </h2>
        <p className="mb-4 text-gray-700">
          The California Climate Action Plan Database (CCAP Database) catalogues
          all known city and county climate action plans (CAPs) in California,
          USA.
        </p>
        <ul className="list-disc pl-5 text-left mb-4 text-gray-600">
          <li>
            An MS Excel spreadsheet listing all jurisdictions, their CAP status,
            and associated information
          </li>
          <li>An ArcGIS online map interface of the CAP data</li>
          <li>A library of all CAPs in Adobe PDF format</li>
          <li>Special reports associated with the database</li>
        </ul>
        <p className="mb-6 text-gray-700">
          The CAP Database was created and is maintained by Professors{" "}
          <a 
            href="https://www.linkedin.com/in/mrboswell/" 
            className="text-emerald-600 hover:text-emerald-300 transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Michael R. Boswell, Ph.D.
          </a> and{" "}
          <a 
            href="https://www.linkedin.com/in/adrienne-greve-58718513/" 
            className="text-emerald-600 hover:text-emerald-300 transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
           Adrienne Greve, Ph.D.
          </a> of California Polytechnic State University, San Luis Obispo. Available for all to use under a Creative Commons Attribution NonCommercial-ShareAlike 4.0 International License.
        </p>
        <a
          href="https://bit.ly/CCAPReport_1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition-colors mb-4"
        >
          More Information
        </a>
      </div>
    </section>
  );
};

export default Hero;
