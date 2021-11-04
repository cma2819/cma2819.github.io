import { Button, Icon } from '@mui/material';
import React from 'react';

type Props = {
  username: string;
};

export const TwitterButton = ({ username }: Props) => {
  return (
    <Button
      color="twitter"
      variant="text"
      startIcon={<Icon baseClassName="fab" className="fa-twitter" />}
      href={`https://twitter.com/${username}`}
      target="_blank"
    >
      Twitter
    </Button>
  );
};