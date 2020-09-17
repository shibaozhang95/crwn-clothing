import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { CustomButtonContainer } from './custom-button.styles';

interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inverted?: boolean
  isGoogleSignIn?: boolean
  children: ReactNode
}

const CustomButton = ({ children, ...props }: OwnProps) => (
  <CustomButtonContainer {...props} >
    {children}
  </CustomButtonContainer>
)

export default CustomButton;