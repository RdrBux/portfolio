export default function Second() {
  return (
    <div className="shadowed | group flex w-[240px] select-none flex-col items-center gap-4 rounded-lg border border-black bg-white p-4 opacity-20 duration-300 hover:bg-blue-200 hover:opacity-100 hover:shadow-none">
      <div className="flex items-end gap-2">
        <div className="h-10 w-6 rounded-full bg-gray-300 duration-300 group-hover:bg-amber-200"></div>
        <div className="h-16 w-6 rounded-full bg-gray-300 duration-300 group-hover:bg-amber-200"></div>
        <div className="h-14 w-6 rounded-full bg-gray-300 duration-300 group-hover:bg-amber-200"></div>
        <div className="h-20 w-6 rounded-full bg-gray-300 duration-300 group-hover:bg-amber-200"></div>
      </div>
      <div className="flex w-full items-center justify-between rounded-full bg-white/50 p-1">
        <div className="ml-6 leading-tight">
          <p className="font-bold">Play me</p>
          <p className="text-sm">The peep song</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-500 group-hover:text-blue-900"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
