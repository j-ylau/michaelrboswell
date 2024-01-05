// components/PDFPreview.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// If you use a CDN, you might not need this line. 
// Make sure to install pdfjs via npm/yarn and import it properly.
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Styles for your document components
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const PDFPreview = ({ pdf }) => {
  return (
    <Document
      file={pdf.url} // Make sure the 'pdf' prop passed down has a 'url' property
      onLoadError={(error) => console.error('Error while loading document!', error)}
      className="PDFDocument"
    >
      <Page pageNumber={1} className="PDFPage PDFPageOne" />
    </Document>
  );
};

export default PDFPreview;
