import { Button, Icon } from '@mui/material';
import React from 'react';

type Props = {
  username: string;
  showUsername?: boolean;
};

export const TwitterButton = ({ username, showUsername }: Props) => {
  return (
    <Button
      color="twitter"
      variant="text"
      startIcon={<Icon baseClassName="fab" className="fa-twitter" />}
      href={`https://twitter.com/${username}`}
      target="_blank"
      sx={{
        textTransform: 'none',
      }}
    >
      { showUsername ? username : 'Twitter' }
    </Button>
  );
};