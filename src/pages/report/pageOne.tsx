import Image from 'next/image';
import SchoolLogo from '../../../public/assets/images/mgec-logo.jpeg';

export default function PageOne() {
  return (
    <>
      <div className="text-center border border-black p-4 mb-10 break-after-page">
        {' '}
        {/*Page 1*/}
        <h1 className="text-4xl font-bold">
          MOTHER&apos;S GLORY EDUCATION CENTRE
        </h1>
        <p className="my-8">c/o P.O.BOX 1689. ACCRA-NORTH</p>
        <p className="my-10">
          Mob: +233(0) 267-340-745, 275-857-788, Email: mummy.glory13@yahoo.com
        </p>
        <Image
          className="mt-40 mx-auto"
          src={SchoolLogo}
          alt="school-logo"
          width={200}
          height={200}
        />
        <h1 className="text-2xl font-medium my-10">TERMINAL REPORT SHEET</h1>
        <h1 className="text-2xl font-medium my-20 bg-gray-300 p-4 mx-8">
          PRE-SCHOOL DEPARTMENT
        </h1>
        <input
          className="bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white uppercase"
          type="text"
          placeholder="John Doe"
        />
      </div>
    </>
  );
}
