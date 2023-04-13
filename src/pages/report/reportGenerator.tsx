import React, { useState } from 'react';
import { Document, Page, View, Canvas, Text } from '@react-pdf/renderer';
import Report from '@/pages/report/index';

export default function ReportGenerator({ content }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleDownloadClick = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'application/pdf' });
    element.href = URL.createObjectURL(file);
    element.download = 'report.pdf';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <Document file={{ data: content }} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber}>
          <View>
            <Report />
          </View>
        </Page>
      </Document>
      <button
        onClick={() => {
          handleDownloadClick();
        }}
        className="text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
          px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
          dark:focus:ring-blue-800 w-[30em] h-20"
      >
        Download Report
      </button>
    </>
  );
}
