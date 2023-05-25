const ErrorHandler = ({ error }) => {
  console.log(error);
  return (
    <>
      {error.response ? (
        <div className="container error-handler">
          <div className="text-center mt-5">
            {error.response.status ? (
              <h1>Error {error.response.status}</h1>
            ) : (
              ""
            )}
          </div>
          <div className="text-center">
            <h4>{error.response.data.message}</h4>
          </div>
        </div>
      ) : (
        <div className="container error-handler">
          <div className="text-center mt-5">
            <div className="text-center">
              <h1>{error.message}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorHandler;
