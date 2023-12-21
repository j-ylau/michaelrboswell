// components/excel.js
'use client'
import React, { useState } from 'react';

const Excel = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle the search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // You would also filter your list of PDFs here
  };

  // This would be your list of PDFs to download, filtered by the search term
  const filteredPDFs = []; // Populate this array based on the search

  return (
    <section className="my-8">
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 border border-gray-300 rounded"
        placeholder="Search for a PDF..."
      />
      <ul>
        {filteredPDFs.map((pdf) => (
          <li key={pdf.id}>
            {/* Link to the PDF */}
            <a href={pdf.url} download>
              {pdf.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Excel;
