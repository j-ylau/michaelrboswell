import React from "react";
import InfoIcon from '@mui/icons-material/Info';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeroDividerTwo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Adjust icon size based on the screen width
  const iconSize = isMobile ? "2em" : "3em"; 
  // Use MUI's `sx` prop for responsive styles instead of Tailwind classes
  const headingStyle = isMobile ? { fontSize: '1.25rem' } : { fontSize: '1.5rem' }; // equivalent to text-xl and text-2xl
  const buttonSize = isMobile ? "small" : "medium"; 

  return (
    <section className="bg-gray-100 p-10 font-sans">
      <Grid container spacing={isMobile ? 2 : 4} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} className="flex flex-col items-center text-center">
          <SummarizeIcon style={{ fontSize: iconSize, color: "#065f46" }} />
          <h2 style={headingStyle} className="font-bold text-gray-800 mt-4">
            State of Climate Action Planning
          </h2>
          <p className="mt-2 text-gray-600">
            A brief report of the status of local climate action planning in California.
          </p>
          <Button 
            variant="contained" 
            href="https://www.dropbox.com/scl/fi/07nuidhr3ikgeynelmwnb/California-Climate-Action-Plan-Reports-2.pdf?rlkey=wmpjkn5409tb5hrfl371gewjw&dl=0" 
            size={buttonSize}
            sx={{
              mt: 4,
              fontWeight: 'bold',
              backgroundColor: '#065f46',
              color: 'white',
              '&:hover': {
                backgroundColor: '#2C8C6B', // Darker shade on hover
              },
            }}
            target="_blank"
          >
            Learn More
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} className="flex flex-col items-center text-center">
          <InfoIcon style={{ fontSize: iconSize, color: "#065f46" }} />
          <h2 style={headingStyle} className="font-bold text-gray-800 mt-4">
            CCAP Database Info
          </h2>
          <p className="mt-2 text-gray-600">
            A description of the database history, compilation, and contents.
          </p>
          <Button 
            variant="contained" 
            href="https://www.dropbox.com/scl/fi/g9udclvfhax7vqawnqniy/California-Climate-Action-Plan-Reports-1.pdf?rlkey=n3cz9odq744qcdzuf10oj5czu&dl=0" 
            size={buttonSize}
            sx={{
              mt: 4,
              fontWeight: 'bold',
              backgroundColor: '#065f46',
              color: 'white',
              '&:hover': {
                backgroundColor: '#2C8C6B',
              },
            }}
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
