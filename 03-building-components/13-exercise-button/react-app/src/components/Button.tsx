import { ReactNode } from "react";

interface Props {
  children: string;
  // The "?" meant that this property is OPTIONAL
  // color?: string;

  // The string literal values prevents other colors from being used
  color?: "primary" | "secondary" | "danger";

  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
      <span> </span>
    </>
  );
};

export default Button;
