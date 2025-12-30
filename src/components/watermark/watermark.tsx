export default function Watermark() {
  return (
    <div>
      <div className="text-center text-xl">
        Preview environment — content subject to change
      </div>
    <div className="pointer-events-none fixed bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-80">
      <span className="md:text-6xl text-4xl uppercase tracking-wider text-gray-400 ">
        Preview • Not Final
      </span>
    </div>

    </div>
  );
}
