export default function Watermark() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
      <div className="bg-red-700 text-white py-1 px-4 shadow-md flex justify-center items-center pointer-events-auto border-b border-yellow-600">
        <div className="flex items-center space-x-2 text-xs md:text-sm font-bold tracking-tight uppercase">
          <span className="bg-black text-white px-2 py-0.5 rounded text-[10px]">Staging</span>
          <p>
            Preview environment — All content subject to change.
          </p>
        </div>
      </div>
    </div>
    <div className="mb-7" />
    </div>
  );
}
