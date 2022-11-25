
import { Button, Icon } from '@mui/material';
import React from 'react';

type Props = {
  username: string;
  showUsername?: boolean;
};

export const GithubButton = ({ username, showUsername }: Props) => {
  return (
    <Button
      color="github"
      variant="text"
      startIcon={<Icon baseClassName="fab" className="fa-github" />}
      href={`https://github.com/${username}`}
      target="_blank"
      sx={{
        textTransform: 'none',
      }}
    >
      { showUsername ? username : 'GitHub' }
    </Button>
  );
};