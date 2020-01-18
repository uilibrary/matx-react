import React from "react";

const LoaderBounce = () => {
  return (
    <div className="loader-bounce">
      <div className="spinner">
        <div
          className="double-bounce1 mat-bg-primary"
          style={{background: '#fcc02e'}}
        />
        <div className="double-bounce2 mat-bg-accent" style={{background: '#03a9f4'}} />
      </div>
    </div>
  );
};

export default LoaderBounce;
