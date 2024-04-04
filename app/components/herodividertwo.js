import React from "react";
import InfoIcon from '@mui/icons-material/Info';
import SummarizeIcon from '@mui/icons-material/Summarize';

const HeroDividerTwo = () => {
  // Tailwind CSS utility classes are used for responsiveness and styling
  return (
    <section className="bg-gray-100 p-10 font-sans">
      <div className="flex flex-wrap justify-center -mx-2">
        <div className="w-full sm:w-1/2 p-2 flex flex-col items-center text-center">
          <SummarizeIcon className="text-[#065f46] text-[2em] sm:text-[3em]" />
          <h2 className="font-bold text-gray-800 mt-4 text-xl sm:text-2xl">
            State of Climate Action Planning
          </h2>
          <p className="mt-2 text-gray-600">
            A brief report of the status of local climate action planning in California.
          </p>
          <a
            href="https://www.dropbox.com/scl/fi/07nuidhr3ikgeynelmwnb/California-Climate-Action-Plan-Reports-2.pdf?rlkey=wmpjkn5409tb5hrfl371gewjw&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#065f46] hover:bg-[#2C8C6B] text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>

        <div className="w-full sm:w-1/2 p-2 flex flex-col items-center text-center">
          <InfoIcon className="text-[#065f46] text-[2em] sm:text-[3em]" />
          <h2 className="font-bold text-gray-800 mt-4 text-xl sm:text-2xl">
            CCAP Database Info
          </h2>
          <p className="mt-2 text-gray-600">
            A description of the database history, compilation, and contents.
          </p>
          <a
            href="https://www.dropbox.com/scl/fi/g9udclvfhax7vqawnqniy/California-Climate-Action-Plan-Reports-1.pdf?rlkey=n3cz9odq744qcdzuf10oj5czu&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#065f46] hover:bg-[#2C8C6B] text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroDividerTwo;
