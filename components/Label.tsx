import { LabelProps } from "@/types";
import React from "react";

const Label = ({ title, htmlFor }: LabelProps) => {
  return <label htmlFor={htmlFor}>{title}</label>;
};

export default Label;
