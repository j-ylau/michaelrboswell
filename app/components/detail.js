// components/detail.js
import Image from 'next/image';
import React from 'react';

const Detail = () => {
  return (
    <section className="flex flex-col md:flex-row items-center my-8 bg-gray-100 rounded-lg overflow-hidden">
      <div className="md:flex md:flex-1">
        <div className="relative w-full h-48 md:h-auto md:w-1/2">
          {/* Replace with actual image paths */}
          <Image
            src="/assets/hero1.png"
            alt="Top Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-48 md:h-auto md:w-1/2">
          {/* Replace with actual image paths */}
          <Image
            src="/assets/hero2.png"
            alt="Bottom Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-1 p-8">
        <div className="text-lg">
          <h2 className="text-2xl font-bold mb-4">In the realm of Climate Action Planning...</h2>
          <p>
            Where the future of our planet hangs in the balance, we find ourselves at a critical juncture. The journey towards creating low-carbon, resilient communities is both a scientific pursuit and a testament to human innovation. It is a symphony of modern standards in web development practices, where aesthetic designs mirror the beauty of nature itself.
          </p>
          {/* ... more text here ... */}
        </div>
      </div>
    </section>
  );
};

export default Detail;
