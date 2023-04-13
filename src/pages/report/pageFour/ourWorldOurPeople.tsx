export default function OurWorldOurPeople() {
  return (
    <>
      <div className={'border-t-2 border-solid border-black my-4'}>
        {/*Our world our people*/}
        <h1 className="font-bold my-4 uppercase flex">
          <input type="checkbox" className="w-5 h-5 mr-4" checked={true} />
          Our World Our People
        </h1>
        <table className="table border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr>
              <td className="px-4 py-2 border border-gray-300">&nbsp;</td>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                A
              </td>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                S
              </td>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                N
              </td>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                NEA
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 uppercase text-lg">
                1. Can identify and name a plant
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 uppercase text-lg">
                2. Can identify and name animals
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 uppercase text-lg">
                3. Can identify familiar natural sounds
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5" />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="flex justify-end py-4">
          <tbody>
            <tr>
              <td className="px-4 py-2 border-4 border-black w-[25em]">
                &nbsp;
              </td>
              <td className="px-4 py-2 border-4 border-black w-[8em]">
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
        <p className="uppercase text-2xl font-bold ml-[18em]">
          Promoted To:{' '}
          <input
            type="text"
            className="border-b-4 border-dotted border-black"
            placeholder="Eg. Nursery 2"
          />
        </p>
      </div>
    </>
  );
}
