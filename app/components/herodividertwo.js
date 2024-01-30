// components/HeroDividerTwo.js
import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SummarizeIcon from '@mui/icons-material/Summarize';
import Grid from "@mui/material/Grid";

const HeroDividerTwo = () => {
  return (
    <section className="bg-orange-100 p-6">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} className="flex flex-col items-center">
          <SummarizeIcon style={{ fontSize: "4em", color: "#065f46" }} />
          <h2 className="text-xl font-bold text-emerald-800 my-2">
            Climate Action Reports
          </h2>
          <p className="text-center text-emerald-700">
            Explore our comprehensive reports on climate action strategies and
            their impacts.
          </p>
          <div className="mt-4 w-32 inline-block flex items-center justify-center bg-emerald-800 text-white text-sm px-5 py-2 rounded hover:bg-emerald-700 transition-colors">
            <a href="https://www.dropbox.com/scl/fi/07nuidhr3ikgeynelmwnb/California-Climate-Action-Plan-Reports-2.pdf?rlkey=wmpjkn5409tb5hrfl371gewjw&dl=0" className="text-center">
              Learn More
            </a>
          </div>
        </Grid>

        <Grid item xs={12} md={6} className="flex flex-col items-center">
          <PictureAsPdfIcon style={{ fontSize: "4em", color: "#065f46" }} />
          <h2 className="text-xl font-bold text-emerald-800 my-2">
            In-depth Analysis
          </h2>
          <p className="text-center text-emerald-700">
            Detailed insights into policy frameworks and environmental impact
            assessments.
          </p>
          <div className="mt-4 w-32 inline-block flex items-center justify-center bg-emerald-800 text-white text-sm px-5 py-2 rounded hover:bg-emerald-700 transition-colors">
            <a href="https://www.dropbox.com/scl/fi/g9udclvfhax7vqawnqniy/California-Climate-Action-Plan-Reports-1.pdf?rlkey=n3cz9odq744qcdzuf10oj5czu&dl=0" className="text-center">
              Learn More
            </a>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroDividerTwo;
