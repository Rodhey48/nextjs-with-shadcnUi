// components/Button.tsx
import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useState,
} from "react";
import { PropagateLoader } from "react-spinners";
interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}
const override: CSSProperties = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
  loading,
  type,
}) => {
  let [color, setColor] = useState("#6df7c9");
  return (
    <button
      className={`${className} min-h-10 ${disabled ? "bg-opacity-75" : ""}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      type={type}
    >
      {loading ? (
        <PropagateLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={1.2}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
