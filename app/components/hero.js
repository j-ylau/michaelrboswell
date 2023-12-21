// components/hero.js
import Image from 'next/image';
import React from 'react';
import Paper from '@mui/material/Paper';


const Hero = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap w-full items-center">
      <div className="md:flex-1">
        {/* Placeholder for the image - replace with an actual image */}
        <Paper elevation={4}>
        <Image 
          src="/assets/hero.png" 
          alt="Hero Image" 
          layout="responsive"
          width={600} 
          height={475} 
          objectFit="cover" // Adjust as needed for your image
        />
        </Paper>
      </div>
      <div className="md:flex-1 flex flex-col justify-center p-8 text-center md:text-left">
        <span className="text-sm font-semibold uppercase text-blue-600">The power to do more</span>
        <h1 className="text-4xl font-bold mb-4 mt-2">A large headliner about our product features & services</h1>
        <p className="mb-6">A descriptive secondary text placeholder. Use it to explain your business offer better.</p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors mb-4">Get Started</button>
        <a href="/signin" className="text-blue-600 hover:text-blue-800 transition-colors">Already a member? Sign in</a>
      </div>
    </section>
  );
};

export default Hero;
