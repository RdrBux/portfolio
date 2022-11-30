export default function Comment() {
  return (
    <div className="shadowed | w-[240px] select-none rounded-lg border border-black bg-white opacity-20 grayscale duration-300 hover:opacity-100 hover:grayscale-0">
      <div className="flex justify-between border-b border-black p-4">
        <div className="max-w-[100px] text-sm font-bold">
          You should try to read me
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-gray-200 hover:bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200 hover:bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200 hover:bg-green-500"></div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 text-xs">
        <div className="relative h-16 w-16 shrink-0 rounded-lg bg-pink-200 duration-300">
          <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
        </div>
        <div>Nothing to see here, i'm just a random comment.</div>
      </div>
    </div>
  );
}
