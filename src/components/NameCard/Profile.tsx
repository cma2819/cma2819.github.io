import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import Link from '../Link';
import React from 'react';

const ProfileBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const ProfileTypography = styled(Typography)(() => ({
  textAlign: 'center',
}));

const CardLink = styled(Link)({
  '@media print': {
    color: 'inherit',
    textDecoration: 'none',
  }
});

export const Profile = () => {
  return (
    <ProfileBox>
      <ProfileTypography variant="body1">
          Zelda: Ocarina of Time player / 
        <CardLink href="https://rtain.jp" target="_blank">RTA in Japan</CardLink> staff /
        <CardLink href="https://twitter.com/ome_speedrun" target="_blank">Online Marathon Eventers</CardLink> leader
      </ProfileTypography>
    </ProfileBox>
  );
};