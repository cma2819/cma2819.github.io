import { Button, Icon, Typography } from '@mui/material';
import React from 'react';

export type Props = {
  username: string;
  repository: string;
  tags: string[];
};

export const GithubRepoBanner = ({ username, repository, tags}: Props) => {
  return (
    <Button
      variant="contained"
      startIcon={<Icon baseClassName="fab" className="fa-github" />}
      sx={{
        bgcolor: 'github.main',
        color: '#fff',
        ':hover': {
          bgcolor: 'github.main',
        },
        textTransform: 'none'
      }}
      href={`https://github.com/${username}/${repository}`}
      target="_blank"
    >
      <Typography component="span" variant="body1">
        { repository }
      </Typography>
      <Typography component="span" variant="caption" sx={{
        marginLeft: 1,
      }}>
        { tags.join('/')}
      </Typography>
    </Button>
  );
};