import React from "react";

export const FormInput = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`h-12  flex-grow p-2 border-2 border-transparent rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-300 text-black ${className}`}
  />
);
