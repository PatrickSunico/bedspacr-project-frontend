import React from "react";
import "./Input.scss";

const Input = ({
  type,
  name,
  label,
  className,
  placeholder,
  required,
  onChange,
}) => {
  const inputChanged = (e) => {
    onChange(e);
  };
  console.log(className);
  return (
    <div className="w-full px-3 mb-4">
      {/* if label exists */}
      {label ? (
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        name={name}
        className={className}
        placeholder={placeholder}
        required={required}
        type={type}
        onChange={(e) => inputChanged(e)}
      />
    </div>
  );
};

export default Input;
