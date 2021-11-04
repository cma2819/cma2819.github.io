import { Typography, TypographyVariant } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
  variant: TypographyVariant;
  children: ReactNode;
};

export const MainHeader = ({ variant, children }: Props) => {
  return (
    <Typography variant={variant} sx={{
      textAlign: "center"
    }}>
      { children }
    </Typography>
  );
};