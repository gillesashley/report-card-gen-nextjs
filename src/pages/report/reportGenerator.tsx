import React from 'react';
// import Report from '@/pages/report/index';
import { PDFDownloadLink, Text, Document, Page } from '@react-pdf/renderer';
import Report from '@/pages/report/index';

const TestComponent = () => {
  return (
    <Document>
      <Page>
        <Text>Hello World</Text>
      </Page>
    </Document>
  );
};

export default function ReportGenerator() {
  return (
    <>
      <div>
        <Report />
      </div>
    </>
  );
}
