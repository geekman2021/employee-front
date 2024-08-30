import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.log(error);

  return (
    <>
      <div>
        <h4>Page not found</h4>
      </div>
      <p>{error.status || error.message}</p>
    </>
  );
};

export default ErrorPage;
