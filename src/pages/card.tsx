import { Button, Grid, Stack } from '@mui/material';
import { NextPage } from 'next';
import { TwitterButton } from '../components/Socials/TwitterButton';
import { GithubButton } from '../components/Socials/GithubButton';
import { TwitchButton } from '../components/Socials/TwitchButton';
import { MainHeader } from '../components/MainHeader';
import { CardLayout } from '../components/CardLayout';
import { Profile } from '../components/Card/Profile';
import { CmarioButton } from '../components/Card/CmarioButton';

const Home: NextPage = () => {
  return (
    <CardLayout>
      <Grid container direction='column' sx={{
        height: '100vh',
        padding: 2,
      }}>
        <Grid item xs>
          <Grid 
            container
            display='flex'
            direction='column'
            justifyContent='space-around'
            alignItems='center'
            sx={{
              height: '100%'
            }}
          >
            <Grid item>
              <MainHeader variant="h1">Cma</MainHeader>
              <MainHeader variant="h5">Speedrunner, Software engineer</MainHeader>
            </Grid>
          
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction='column'
            justifyContent="center"
            alignItems='center'
          >
            <Grid item>
              <Profile />
            </Grid>
            <Grid item>
              <CmarioButton />
            </Grid>
            <Grid item>
              <Stack direction='row'>
                <TwitterButton username="cma2819" showUsername />
                <GithubButton username="cma2819" showUsername />
                <TwitchButton username="cma2819" showUsername />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </CardLayout>
  );
};

export default Home;
