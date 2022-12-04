export default function RedButton() {
  return (
    <div className="group flex h-40 w-32 shrink-0 animate-pulse flex-col items-center justify-between rounded-lg border border-black bg-white px-2 py-4 opacity-10 shadow-flat grayscale duration-300 hover:animate-none hover:opacity-100 hover:grayscale-0 lg:opacity-20">
      <div className="text-center font-bold">DON'T CLICK THE BUTTON</div>
      <div className="relative ml-2 mb-10 rotate-[30deg] scale-125 opacity-50 group-hover:opacity-100">
        <div className="red-button"></div>
      </div>
    </div>
  );
}
