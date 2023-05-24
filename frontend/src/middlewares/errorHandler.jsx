const ErrorHandler = ({ error }) => {
  console.log(error);
  return (
    <>
      <div className="container">
        <div className="text-center mt-5">
          <h1>Error {error.response.status}</h1>
        </div>
        <div className="text-center">
          <h4>{error.response.data.message}</h4>
        </div>
      </div>
    </>
  );
};

export default ErrorHandler;
