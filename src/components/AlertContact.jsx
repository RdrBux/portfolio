export default function AlertContact({ isError = false }) {
  const message = isError ? 'Hubo un error' : 'Mensaje enviado';

  return (
    <div
      className={`fixed top-10 left-1/2 z-30 -ml-[164px] w-[328px] rounded-lg shadow-lg ${
        isError ? 'bg-red-300' : 'bg-green-300'
      } px-8 py-2 text-center`}
    >
      {message}
    </div>
  );
}
