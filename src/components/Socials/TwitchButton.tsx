import { Button, Icon } from '@mui/material';
import React from 'react';

type Props = {
  username: string;
};

export const TwitchButton = ({ username }: Props) => {
  return (
    <Button
      color="twitch"
      variant="text"
      startIcon={<Icon baseClassName="fab" className="fa-twitch" />}
      href={`https://twitch.com/${username}`}
      target="_blank"
    >
      Twitch
    </Button>
  );
};