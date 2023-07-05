import React from "react";

const CustomCard = ({ children, style }: any) => {
  return (
    <div className={style}>
      <div>{children}</div>
    </div>
  );
};

export default CustomCard;
