import React from "react";
export const SaveButton = ({ onClick, title }) => {
  return (
    <div>
      <button className="btn btn-primary btn-lg btn-block" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};
