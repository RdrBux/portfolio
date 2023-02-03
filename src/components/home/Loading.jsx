export default function Loading() {
  return (
    <div className="group flex h-fit w-fit shrink-0 animate-pulso items-center gap-2 rounded-lg border border-black bg-white px-6 py-4 opacity-10 shadow-flat grayscale duration-300 animation-delay-9000 hover:animate-none hover:bg-violet-200 hover:opacity-100 hover:grayscale-0">
      <div className="h-6 w-6 rounded-full border-4 border-t-violet-600 border-l-violet-600 border-b-black/20 border-r-black/20 bg-white group-hover:animate-spin group-hover:bg-violet-200"></div>
      <div className="font-bold text-violet-900">Loading...</div>
    </div>
  );
}
