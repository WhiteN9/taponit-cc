import React from "react";

/**
 * Defines the alert message to render if the specified error is truthy.
 * @param error
 * @returns {JSX.Element}
 */

function ErrorAlert({ error }) {
  return (
    error && (
      <div className="alert alert-danger m-2">Error: {error.message}</div>
    )
  );
}

export default ErrorAlert;
