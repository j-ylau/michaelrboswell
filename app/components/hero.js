// components/hero.js
import Image from 'next/image';
import React from 'react';
import Paper from '@mui/material/Paper';

const Hero = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap w-full items-center p-36">
      <div className="md:flex-1">
        {/* Placeholder for the image - replace with an actual image */}
        <Paper elevation={4}>
          <Image 
            src="/assets/hero.png" // Replace with the cover image of your annual report
            alt="Annual Report Cover" 
            layout="responsive"
            width={600} 
            height={475} 
            objectFit="cover" // Adjust as needed for your image
          />
        </Paper>
      </div>
      <div className="md:flex-1 flex flex-col justify-center p-8 text-center md:text-left">
        <span className="text-sm font-semibold uppercase text-green-500">Our Annual Report</span>
        <h1 className="text-4xl font-bold mb-4 mt-2">Driving Positive Change in Climate Action</h1>
        <p className="mb-6">Discover our commitment to sustainability and environmental responsibility in our latest annual report. Dive into the details of our initiatives and impact on climate change.</p>
        <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors mb-4">Download Now</button>
        <a href="/signin" className="text-green-500 hover:text-green-700 transition-colors">Explore More</a>
      </div>
    </section>
  );
};

export default Hero;
