export default function First() {
  return (
    <div className="shadowed | w-[240px] select-none rounded-lg border border-black bg-white opacity-20 duration-200 hover:opacity-100 hover:shadow-none">
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
      <div className="p-4 py-2 text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti porro
        eum vel aliquam hic facere iusto autem deserunt.
      </div>
    </div>
  );
}
