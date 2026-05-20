import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <div className="btn btn-primary">{children}</div>
    </>
  );
};

export default Button;
