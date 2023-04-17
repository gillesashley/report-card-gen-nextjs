import * as React from 'react';

function ReportButton() {
  const generateReport = () => {
    window.print();
  };

  return (
    <>
      <div className="flex justify-end">
        <button onClick={generateReport} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Generate Report
        </button>
      </div>
    </>
  );
}

export default ReportButton;
