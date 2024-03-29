import React from "react";
import "./Checkbox.scss";

const Checkbox = ({
 className,
 type,
 name,
 label,
 checked,
 onChange,
 value,
}) => {
 return (
  <label className="md:w-1/2 block text-gray-500 font-bold">
   <input
    type="checkbox"
    className={className}
    name={name}
    checked={checked}
    onChange={onChange}
   />
   <span className="text-sm font-thin primary-color-text">{label}</span>
  </label>
 );
};

export default Checkbox;
