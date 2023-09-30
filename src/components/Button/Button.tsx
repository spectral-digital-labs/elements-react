import React from "react";
import { Button as ElButton } from "@spectral-labs/elements-react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label = "Button" }) => (
  <ElButton label={label} />
);

export default Button;
