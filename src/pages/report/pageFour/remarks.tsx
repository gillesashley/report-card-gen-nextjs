export default function Remarks() {
  return (
    <>
      <div className="text-left mt-8">
        <div className="text-lg font-medium uppercase my-2">
          Conduct:{' '}
          <input
            type="text"
            className="border-b-4 border-dotted border-black uppercase"
            placeholder="Eg. Neat"
          />
        </div>
        <div className="text-lg font-medium uppercase my-2">
          Interest:{' '}
          <input
            type="text"
            className="border-b-4 border-dotted border-black uppercase"
            placeholder="Eg. Rhymes and outdoor games"
          />
        </div>
        <div className="text-lg font-medium uppercase my-2">
          Teachers Remark:{' '}
          <input
            type="text"
            className="border-b-4 border-dotted border-black uppercase"
            placeholder="Eg. Very good"
          />
        </div>
        <div className="text-lg font-medium uppercase my-2">
          Headmaster&apos;s Remarks:{' '}
          <input
            type="text"
            className="border-b-4 border-dotted border-black uppercase"
            placeholder="Eg. Satisfactory"
          />
          Signature:{' '}
          <input
            type="text"
            className="border-b-4 border-dotted border-black uppercase"
            placeholder="Signature"
          />
        </div>
      </div>
    </>
  );
}
