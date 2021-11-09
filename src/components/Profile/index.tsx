import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import { GithubRepoBanner, Props as GithubRepoProps } from '../GithubRepoBanner';
import Link from '../Link';

const ProfileBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const ProfileTypography = styled(Typography)(() => ({
  textAlign: 'center',
}));

const username = 'cma2819';

const repositories: GithubRepoProps[] = [
  {
    username,
    repository: 'ome-portal',
    tags: [
      'Laravel',
      'Vue',
      'TypeScript',
    ],
  },
  {
    username,
    repository: 'ome-speedrun-layouts',
    tags: [
      'NodeCG',
      'React',
      'TypeScript',
    ],
  },
];

export const Profile = () => {
  return (
    <>
      <ProfileBox>
        <ProfileTypography variant="h6">Software Engineer</ProfileTypography>
        <Grid container gap={2} justifyContent="center">
          {
            repositories.map(repo => (
              <Grid item key={repo.repository}>
                <GithubRepoBanner {...repo} />
              </Grid>
            ))
          }
        </Grid>
      </ProfileBox>
      
      <ProfileBox>
        <ProfileTypography variant="h6">Speedrunner</ProfileTypography>
        <ProfileTypography variant="body1">
          Zelda: Ocarina of Time player / 
          <Link href="https://rtain.jp" target="_blank">RTA in Japan</Link> staff /
          <Link href="https://portal.rtamarathon.online" target="_blank">Online Marathon Eventers</Link> leader
        </ProfileTypography>
      </ProfileBox>
    </>
  );
};