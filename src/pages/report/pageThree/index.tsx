import Phycho from '@/pages/report/pageThree/phycho';
import Senses from '@/pages/report/pageThree/senses';
import LanguageAndCommunication from '@/pages/report/pageThree/languageAndCommunication';
import Cognitive from '@/pages/report/pageThree/cognitive';
import NumberWork from '@/pages/report/pageThree/numberWork';

export default function PageThree() {
  return (
    <>
      <div className="text-center border border-black mb-10 p-4 break-after-page">
        <Phycho />
        <Senses />
        <LanguageAndCommunication />
        <Cognitive />
        <NumberWork />
      </div>
    </>
  );
}
