// components/Report.js
import React, { useState } from "react";
import PDFPreview from "./PDFPreview"; // A component you might create for previewing PDFs

const Report = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPDF, setSelectedPDF] = useState(null);

  const pdfs = [
    { id: 1, name: 'Annual Report 2021', url: '/pdfs/annual-report-2021.pdf' },
    { id: 2, name: 'Environmental Policy', url: '/pdfs/environmental-policy.pdf' },
    { id: 3, name: 'Product Catalog', url: '/pdfs/product-catalog.pdf' },
    { id: 4, name: 'User Manual', url: '/pdfs/user-manual.pdf' },
    { id: 5, name: 'Financial Statement', url: '/pdfs/financial-statement.pdf' },
    { id: 6, name: 'Employee Handbook', url: '/pdfs/employee-handbook.pdf' },
    { id: 7, name: 'Marketing Plan', url: '/pdfs/marketing-plan.pdf' },
    { id: 8, name: 'Research Report', url: '/pdfs/research-report.pdf' },
    { id: 9, name: 'Project Proposal', url: '/pdfs/project-proposal.pdf' },
    { id: 10, name: 'Training Manual', url: '/pdfs/training-manual.pdf' },
    { id: 11, name: 'Business Plan', url: '/pdfs/business-plan.pdf' },
    { id: 12, name: 'Terms and Conditions', url: '/pdfs/terms-and-conditions.pdf' },
    { id: 13, name: 'Privacy Policy', url: '/pdfs/privacy-policy.pdf' },
    { id: 14, name: 'Product Brochure', url: '/pdfs/product-brochure.pdf' },
    { id: 15, name: 'Invoice Template', url: '/pdfs/invoice-template.pdf' },
    { id: 16, name: 'Employee Benefits', url: '/pdfs/employee-benefits.pdf' },
    { id: 17, name: 'Safety Manual', url: '/pdfs/safety-manual.pdf' },
    { id: 18, name: 'Quality Assurance', url: '/pdfs/quality-assurance.pdf' },
    { id: 19, name: 'Code of Conduct', url: '/pdfs/code-of-conduct.pdf' },
    { id: 20, name: 'Customer Survey', url: '/pdfs/customer-survey.pdf' },
    { id: 21, name: 'Financial Forecast', url: '/pdfs/financial-forecast.pdf' },
    { id: 22, name: 'Employee Evaluation', url: '/pdfs/employee-evaluation.pdf' },
    { id: 23, name: 'Product Specifications', url: '/pdfs/product-specifications.pdf' },
    { id: 24, name: 'Marketing Strategy', url: '/pdfs/marketing-strategy.pdf' },
    { id: 25, name: 'Service Agreement', url: '/pdfs/service-agreement.pdf' },
    { id: 26, name: 'Customer Testimonials', url: '/pdfs/customer-testimonials.pdf' },
    { id: 27, name: 'Project Timeline', url: '/pdfs/project-timeline.pdf' },
    { id: 28, name: 'Employee Training', url: '/pdfs/employee-training.pdf' },
    { id: 29, name: 'Inventory Report', url: '/pdfs/inventory-report.pdf' },
    { id: 30, name: 'Company Handbook', url: '/pdfs/company-handbook.pdf' },
    // Add more PDFs here
  ];
  const filteredPDFs = pdfs.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex w-full p-20  shadow-lg">
      {/* Left Side - File Navigation */}
      <div className="w-1/2 pr-4">
        <div className="mb-6">
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for a PDF..."
          />
        </div>
        <div className="max-h-80 overflow-auto">
          {filteredPDFs.length > 0 ? (
            <ul className="list-none space-y-4">
              {filteredPDFs.map((pdf) => (
                <li
                  key={pdf.id}
                  className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors cursor-pointer"
                  onMouseOver={() => setSelectedPDF(pdf)}
                >
                  {pdf.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-gray-700 p-4">No PDFs found.</div>
          )}
        </div>
      </div>

      {/* Right Side - Live Preview Section */}
      <div className="w-1/2 pl-4 border-l border-gray-300">
        {selectedPDF ? (
          <PDFPreview pdf={selectedPDF} />
        ) : (
          <div className="text-center text-gray-700 p-4">
            Hover over a file to see its preview.
          </div>
        )}
      </div>
    </section>
  );
};

export default Report;
