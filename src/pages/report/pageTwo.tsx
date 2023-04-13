export default function PageTwo() {
  return (
    <>
      <div className="text-center border border-black p-4">
        <h1 className="text-4xl font-bold">
          MOTHER&apos;S GLORY EDUCATION CENTRE
        </h1>
        <p className="my-8">c/o P.O.BOX 1689. ACCRA-NORTH</p>
        <p className="my-10">
          Mob: +233(0) 267-340-745, 275-857-788, Email: mummy.glory13@yahoo.com
        </p>
        <h1 className="text-2xl font-medium my-10">TERMINAL REPORT SHEET</h1>
        <h1 className="text-lg font-medium bg-gray-300 mx-28">
          PRE-SCHOOL DEPARTMENT
        </h1>
        <div className="flex items-center mx-10 py-4">
          <label
            className="uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor="pupilName"
          >
            Pupil&apos;s Name:
          </label>
          <input
            type="text"
            className="bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 focus:bg-white uppercase"
            id="pupilName"
            placeholder="John Doe"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 text-left justify-items-start items-start mx-10">
          <div>
            <label
              className="uppercase tracking-wide text-gray-700 text-xs font-bold"
              htmlFor="pupilClass"
            >
              Class:
            </label>
            <input
              type="text"
              className="border-b-2 border-dotted border-black"
              id="pupilClass"
              placeholder="Eg. CRECHE"
            />
          </div>
          <div>
            <label
              className="uppercase text-gray-700 text-xs font-bold"
              htmlFor="academicYear"
            >
              Academic Year:
            </label>
            <input
              type="text"
              className="border border-solid border-black"
              id="academicYear"
              placeholder="Eg. 2023/2024"
              pattern="\d{4}\/\d{4}"
              required
            />
          </div>
          <div>
            <label
              className="uppercase text-gray-700 text-xs font-bold"
              htmlFor="term"
            >
              Term:
            </label>
            <input
              type="number"
              className="border-b-2 border-dotted border-black"
              id="term"
            />
          </div>
          <div>
            <label
              className="uppercase text-gray-700 text-xs font-bold"
              htmlFor="term"
            >
              Attendance:
            </label>
            <input
              type="number"
              className="border-b-2 border-dotted border-black"
              id="attendance"
            />
          </div>
          <div>
            <label
              className="uppercase text-gray-700 text-xs font-bold"
              htmlFor="outOf"
            >
              Out of:
            </label>
            <input
              type="number"
              className="border-b-2 border-dotted border-black"
              id="outOf"
            />
          </div>
          <div>
            <label
              className="uppercase text-gray-700 text-xs font-bold"
              htmlFor="numberOnRoll"
            >
              Number on Roll:
            </label>
            <input
              type="number"
              className="border-b-2 border-dotted border-black"
              id="numberOnRoll"
            />
          </div>
          <div>
            <label
              className="uppercase text-gray-700 text-xs font-bold"
              htmlFor="vacationDate"
            >
              Vacation Date:
            </label>
            <input
              type="date"
              className="border border-black"
              id="vacationDate"
            />
          </div>
          <div>
            <label
              className="uppercase text-gray-700 text-xs font-bold"
              htmlFor="reopeningDate"
            >
              Re-opening Date:
            </label>
            <input
              type="date"
              className="border border-black"
              id="reopeningDate"
            />
          </div>
        </div>
        <div className="border-t-2 border-solid border-black my-4">
          {/*Physical Development*/}
          <h1 className="flex m-4">Physical Development</h1>
          <div className="flex justify-between">
            <table className="table">
              <tbody>
                <tr>
                  <td className="px-4 py-2">Age:</td>
                  <td className="px-4 py-2 border border-black">
                    <input type="number" placeholder="Eg. 1.5" /> YEARS
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Height:</td>
                  <td className="px-4 py-2 border border-black">
                    <input type="number" placeholder="Eg. 31" /> CM
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Weight:</td>
                  <td className="px-4 py-2 border border-black">
                    <input type="number" placeholder="Eg. 18" /> KG
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-left border border-black p-4">
              <h2 className="font-bold underline">KEY</h2>
              <p>A - ALWAYS</p>
              <p>S - SOMETIMES</p>
              <p>N - NEVER</p>
              <p>NEA - NEEDS EFFORT AND ATTENTION</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
