// page.js
'use client'
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Details from './components/detail';
import Map from './components/map';
import Report from './components/reports';
import Excel from './components/excel';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-0">
      <Navbar />
      <Hero />
      {/* <Details /> */}
      <Map />
      <Report />
      {/* <Excel /> */}
      <Footer />
    </main>
  );
}
