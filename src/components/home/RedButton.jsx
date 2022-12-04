export default function RedButton() {
  return (
    <div className="group flex h-40 w-32 flex-col items-center justify-between rounded-lg border border-black px-2 py-4 opacity-10 shadow-flat grayscale duration-300 hover:opacity-100 hover:grayscale-0 lg:opacity-20">
      <div className="text-center font-bold">DON'T CLICK THE BUTTON</div>
      <div className="relative ml-2 mb-10 rotate-[30deg] scale-125 opacity-50 group-hover:opacity-100">
        <div className="red-button"></div>
      </div>
    </div>
  );
}
