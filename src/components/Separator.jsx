import star from '../assets/star.svg';

export default function Separator({ starLocation = 2 }) {
  return (
    <div
      role="separator"
      className="z-10"
      style={{ display: 'grid', gridTemplateColumns: `${starLocation}fr 1fr` }}
    >
      <div className="h-5 grid-cols-1 border-b border-black"></div>
      <div className="relative border-b border-black">
        <img
          className="absolute bottom-0 left-0 translate-y-[20.5px] -translate-x-1/2"
          src={star}
          alt=""
        />
      </div>
    </div>
  );
}
