import { ChangeEvent, MouseEventHandler } from "react";

export interface InPutFormProps {
  type: "text" | "number" | "password" | "email" | "checkbox";
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  containerStyles?: string;
}

export interface LabelProps {
  title: string;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
