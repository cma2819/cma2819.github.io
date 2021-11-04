
import { Button, Icon } from '@mui/material';
import React from 'react';

type Props = {
  username: string;
};

export const GithubButton = ({ username }: Props) => {
  return (
    <Button
      color="github"
      variant="text"
      startIcon={<Icon baseClassName="fab" className="fa-github" />}
      href={`https://github.com/${username}`}
      target="_blank"
    >
      GitHub
    </Button>
  );
};