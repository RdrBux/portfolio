export default function Separator({ starLocation = 2 }) {
  return (
    <div
      role="separator"
      className={`z-10 grid grid-cols-[${starLocation}fr,1fr]`}
    >
      <div className="h-5 rounded-br-2xl border-b border-black bg-stone-300"></div>
      <div className="relative rounded-bl-2xl border-b border-black bg-stone-300 before:absolute before:-bottom-3 before:-left-3 before:-z-10 before:h-6 before:w-6 before:rotate-45 before:bg-black">
        {/* <div className="before:absolute before:-bottom-4 before:-left-4 before:z-0 before:h-8 before:w-8 before:rotate-45 before:bg-black"></div> */}
      </div>
      <div className="h-5 rounded-tr-2xl bg-stone-300"></div>
      <div className="h-5 rounded-tl-2xl bg-stone-300"></div>
    </div>
  );
}
