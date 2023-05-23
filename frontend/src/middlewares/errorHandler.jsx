const ErrorHandler = ({ error }) => {
  console.log(error);
  return (
    <>
      <h1>Error {error.response.status}</h1>
      <h4>{error.response.data.message}</h4>
    </>
  );
};

export default ErrorHandler;
