import React, { ReactNode } from "react";

import "./Button.css";

interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const Button = (props: IButtonProps) => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
