import React from "react";
export const TextInput = ({ placeholder, onChange }) => {
  return (
    <div>
      <input
        className="input-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
