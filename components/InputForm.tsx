import { InPutFormProps } from "@/types";
import React from "react";

const InputForm = ({
  type,
  value,
  placeholder,
  onChange,
  containerStyles,
}: InPutFormProps) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={containerStyles}
      />
    </div>
  );
};

export default InputForm;
