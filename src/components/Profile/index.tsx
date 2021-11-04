import { Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ProfileTypography = styled(Typography)(() => ({
  textAlign: 'center',
}));

export const Profile = () => {
  return (
    <>
      <ProfileTypography variant="h6">Software Engineer</ProfileTypography>
      <ProfileTypography variant="body1">
        OME Portal (Laravel + Vue.js + TypeScript) / ome-speedrun-layouts (NodeCG + React + TypeScript)
      </ProfileTypography>

      <ProfileTypography variant="h6">Speedrunner</ProfileTypography>
      <ProfileTypography variant="body1">
        Zelda: Ocarina of Time player / RTA in Japan staff / Online Marathon Eventers leader
      </ProfileTypography>
    </>
  );
};