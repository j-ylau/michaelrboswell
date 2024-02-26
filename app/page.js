// page.js
'use client'
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import HeroDividerOne from './components/herodividerone';
import HeroDividerTwo from './components/herodividertwo';
import HeroDividerThree from './components/herodividerthree';
import Details from './components/detail';
import Map from './components/map';
import Folder from './components/folder';
import Reports from './components/reports';
import Excel from './components/excel';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      {/* <HeroDividerOne /> */}
      <Map id="map"/>
      <HeroDividerTwo />
      <Folder id="folder"/>
      <HeroDividerThree />
      <Reports id="reports"/>
      {/* <Excel /> */}
      <Footer />
    </main>
  );
}
