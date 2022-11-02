import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Error</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
