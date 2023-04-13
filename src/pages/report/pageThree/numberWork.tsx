export default function NumberWork() {
  return (
    <>
      <div className={'border-t-2 border-solid border-black my-4'}>
        {/*Number work*/}
        <h1 className="font-bold my-4 uppercase flex">
          <input type="checkbox" className="w-5 h-5 mr-4" checked={true} />
          Number Work
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
            <tr key={'canSayNumerals'}>
              <td className="px-4 py-2 border border-gray-300 uppercase text-lg">
                1. Can say numerals
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
            <tr key={'canCountUpTo'}>
              <td className="px-4 py-2 border border-gray-300 uppercase text-lg">
                2. Can count up to
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
            <tr key={'canWriteNumerals'}>
              <td className="px-4 py-2 border border-gray-300 uppercase text-lg">
                3. Can write numerals 1, 2, 3
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
      </div>
    </>
  );
}
