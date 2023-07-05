import { LabelProps } from "@/types";
import React from "react";

const Label = ({ title }: LabelProps) => {
  return <label>{title}</label>;
};

export default Label;
