export default function CreativeArts() {
  return (
    <>
      <div>
        {/*Creative art*/}
        <h1 className="font-bold my-4 uppercase flex">
          <input type="checkbox" className="w-5 h-5 mr-4" checked={true} />
          Creative Art
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
                1. Enjoys music and dancing
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
                2. Can make simple pattern
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
                3. Can make free hand drawing of objects
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
