import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SummarizeIcon from '@mui/icons-material/Summarize';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const HeroDividerTwo = () => {
  return (
    <section className="bg-gray-100 py-10 font-sans">
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} className="flex flex-col items-center text-center">
          <SummarizeIcon style={{ fontSize: "3em", color: "#065f46" }} />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Climate Action Reports
          </h2>
          <p className="mt-2 text-gray-600">
            Explore our comprehensive reports on climate action strategies and their impacts.
          </p>
          <Button 
            variant="contained" 
            href="https://www.dropbox.com/scl/fi/07nuidhr3ikgeynelmwnb/California-Climate-Action-Plan-Reports-2.pdf?rlkey=wmpjkn5409tb5hrfl371gewjw&dl=0" 
            className="mt-4 font-semibold"
            style={{ backgroundColor: "#065f46", color: "white" }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#2C8C6B"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#065f46"}
            target="_blank"
          >
            Learn More
          </Button>
        </Grid>

        <Grid item xs={12} md={6} className="flex flex-col items-center text-center">
          <PictureAsPdfIcon style={{ fontSize: "3em", color: "#065f46" }} />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            In-depth Analysis
          </h2>
          <p className="mt-2 text-gray-600">
            Detailed insights into policy frameworks and environmental impact assessments.
          </p>
          <Button 
            variant="contained" 
            href="https://www.dropbox.com/scl/fi/g9udclvfhax7vqawnqniy/California-Climate-Action-Plan-Reports-1.pdf?rlkey=n3cz9odq744qcdzuf10oj5czu&dl=0" 
            className="mt-4 font-semibold"
            style={{ backgroundColor: "#065f46", color: "white" }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#2C8C6B"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#065f46"}
            target="_blank"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroDividerTwo;
