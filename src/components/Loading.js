import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center my-auto">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
