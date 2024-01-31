import Image from 'next/image';
import React from 'react';
import Paper from '@mui/material/Paper';

const Hero = () => {
  return (
    <section className="flex flex-wrap justify-center items-center w-full p-8 md:p-36 font-sans">
      <div className="w-full lg:max-w-md mx-auto mb-6 md:mb-0">
        <Paper elevation={4}>
          {/* Updated Image component usage */}
          <Image 
            src="/assets/hero3.png" // Replace with the cover image of your annual report
            alt="Annual Report Cover" 
            width={600} 
            height={475} 
            style={{
              // Adjust as needed for your image
              objectFit: 'cover',
              // Ensure the image is responsive
              width: '100%',
              height: '100%'
            }}
          />
        </Paper>
      </div>
      <div className="w-full lg:max-w-md flex flex-col justify-center text-center md:text-left">
        <span className="text-sm font-semibold uppercase text-emerald-500">Our Annual Report</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-2 text-emerald-900">Driving Positive Change in Climate Action</h1>
        <p className="mb-6 text-emerald-900">Discover our commitment to sustainability and environmental responsibility in our latest annual report. Dive into the details of our initiatives and impact on climate change.</p>
        <button href="https://www.dropbox.com/scl/fi/gpcgfh2y4apqkteaxy4qp/California-CAP-Database-2023-1.xlsx?rlkey=5ind82cw4q2h6nh5zm8yjck5f&dl=0" target="_blank" className="px-6 py-2 bg-emerald-900 text-white rounded hover:bg-green-700 transition-colors mb-4">Download Now</button>
        <a href="https://www.dropbox.com/sh/75fk6u54v84l1gf/AAAe3brMbUmro2W0bGNllY15a?dl=0" target="_blank" className="text-emerald-500 hover:text-emerald-900 transition-colors">Explore More</a>
      </div>
    </section>
  );
};

export default Hero;
