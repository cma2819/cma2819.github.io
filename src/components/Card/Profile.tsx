import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';

const ProfileBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const ProfileTypography = styled(Typography)(() => ({
  textAlign: 'center',
}));

export const Profile = () => {
  return (
    <ProfileBox>
      <ProfileTypography variant="h6">
          Zelda: Ocarina of Time player / 
          RTA in Japan staff /
          Online Marathon Eventers leader
      </ProfileTypography>
    </ProfileBox>
  );
};