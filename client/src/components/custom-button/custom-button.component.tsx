import React, { ButtonHTMLAttributes, ReactNode } from "react";

import "./custom-button.styles.scss";

interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inverted?: boolean;
  isGoogleSignIn?: boolean;
  children: ReactNode;
}

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherPops
}: OwnProps) => {
  const stylesName = isGoogleSignIn
    ? "google-sign-styles"
    : inverted
    ? "inverted-button-styles"
    : "button-styles";
  return (
    <button {...otherPops} className={"btn " + stylesName}>
      {children}
    </button>
  );
};

export default CustomButton;
