import CreativeArts from '@/pages/report/pageFour/creativeArts';
import OurWorldOurPeople from '@/pages/report/pageFour/ourWorldOurPeople';
import Remarks from '@/pages/report/pageFour/remarks';

export default function PageFour() {
  return (
    <>
      <div className="text-center border border-black mb-10 p-4 pb-96 break-after-page">
        <CreativeArts />
        <OurWorldOurPeople />
        <Remarks />
      </div>
    </>
  );
}
