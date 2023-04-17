import PageOne from '@/pages/report/pageOne';
import PageTwo from '@/pages/report/pageTwo';
import PageThree from '@/pages/report/pageThree';
import PageFour from '@/pages/report/pageFour';
import ReportButton from './report-button';

export default function Report() {
  return (
    <>
      <div>
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <ReportButton/>
      </div>
    </>
  );
}
