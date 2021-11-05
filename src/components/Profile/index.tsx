import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { GithubRepoBanner, Props as GithubRepoProps } from '../GithubRepoBanner';

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
      
      <ProfileTypography variant="h6">Speedrunner</ProfileTypography>
      <ProfileTypography variant="body1">
        Zelda: Ocarina of Time player / RTA in Japan staff / Online Marathon Eventers leader
      </ProfileTypography>
    </>
  );
};