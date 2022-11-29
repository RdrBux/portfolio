export default function First() {
  return (
    <div className="shadowed | group w-[240px] select-none rounded-lg border border-black bg-white opacity-100 duration-300 hover:opacity-100 hover:shadow-none">
      <div className="flex justify-between border-b border-black p-4 py-2">
        <div className="max-w-[100px] text-sm font-bold">
          Choose what to design today
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-gray-200 hover:bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200 hover:bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200 hover:bg-green-500"></div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-4 py-2 text-xs">
        <div className="relative h-16 w-16 shrink-0 rounded-lg bg-gray-200 duration-300 group-hover:bg-pink-200">
          <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-gray-400 group-hover:bg-green-500"></div>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    </div>
  );
}
