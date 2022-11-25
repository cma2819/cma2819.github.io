import { Button, Icon } from '@mui/material';
import React from 'react';

type Props = {
  username: string;
  showUsername?: boolean;
};

export const TwitchButton = ({ username, showUsername }: Props) => {
  return (
    <Button
      color="twitch"
      variant="text"
      startIcon={<Icon baseClassName="fab" className="fa-twitch" />}
      href={`https://twitch.com/${username}`}
      target="_blank"
      sx={{
        textTransform: 'none',
      }}
    >
      { showUsername ? username : 'Twitch' }
    </Button>
  );
};