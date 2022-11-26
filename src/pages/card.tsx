import { Box, Grid, Stack } from '@mui/material';
import { NextPage } from 'next';
import { TwitterButton } from '../components/Socials/TwitterButton';
import { GithubButton } from '../components/Socials/GithubButton';
import { TwitchButton } from '../components/Socials/TwitchButton';
import { MainHeader } from '../components/MainHeader';
import { NameCardLayout } from '../components/NameCardLayout';
import { Profile } from '../components/NameCard/Profile';
import { CmarioButton } from '../components/NameCard/CmarioButton';
import { QrCode } from '../components/NameCard/QrCode';
import { AddressBar } from '../components/NameCard/AddressBar';

const Home: NextPage = () => {
  return (
    <NameCardLayout>
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
              <MainHeader variant="body1">Speedrunner, Software engineer</MainHeader>
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
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        sx={{
          height: '100vh',
          '@media not print': {
            display: 'none',
          }
        }}
      >
        <Stack
          alignItems='center'
          spacing={2}
        >
          <QrCode />
          <AddressBar />
        </Stack>
      </Box>

    </NameCardLayout>
  );
};

export default Home;
