import PageOne from '@/pages/report/pageOne';
import PDFDownloadLink from '@react-pdf/renderer';
import PageTwo from '@/pages/report/pageTwo';
import PageThree from '@/pages/report/pageThree';
import PageFour from '@/pages/report/pageFour';

export default function Report() {
  return (
    <>
      <div>
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
      </div>
    </>
  );
}
