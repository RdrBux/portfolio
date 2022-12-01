import { useState } from 'react';

export default function Chat() {
  const [hiddenMsg, setHiddenMsg] = useState(false);

  return (
    <div className="shadowed | w-48 shrink-0 rounded-lg bg-white opacity-20 grayscale duration-300 hover:opacity-100 hover:grayscale-0">
      <div className="flex items-center gap-4 rounded-t-lg border border-black bg-green-200 p-3">
        <div className="relative h-7 w-7 overflow-hidden rounded-full	bg-purple-50">
          <div className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-300"></div>
          <div className="full absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-purple-300"></div>
        </div>
        <div className="font-bold">Cosme Fulanito</div>
      </div>
      <div className="flex flex-col gap-2 rounded-b-lg border-x border-b border-black p-3 text-sm">
        <div className="w-fit rounded-b-lg rounded-tr-lg bg-purple-200 px-2 py-1">
          Hi
        </div>
        <div className="w-fit rounded-b-lg rounded-tr-lg bg-purple-200 px-2 py-1">
          how are you?
        </div>
        <div
          className={`${
            hiddenMsg ? 'opacity-100' : 'opacity-0'
          } w-fit self-end rounded-b-lg rounded-tl-lg bg-gray-200 px-2 py-1`}
        >
          Send me
        </div>
        <div className="flex rounded-lg border border-black">
          <div className="flex w-full items-center pl-2">
            {hiddenMsg ? '' : 'Send me'}
          </div>
          <div
            onClick={() => setHiddenMsg(true)}
            className="cursor-pointer rounded-r-lg border-l border-black bg-green-200 px-2 py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
