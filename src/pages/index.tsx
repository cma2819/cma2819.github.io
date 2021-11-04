import { Grid } from '@mui/material'
import { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { TwitterButton } from '../components/Socials/TwitterButton'
import { GithubButton } from '../components/Socials/GithubButton'
import { TwitchButton } from '../components/Socials/TwitchButton'
import { MainHeader } from '../components/MainHeader'

const Home: NextPage = () => {
  return (
    <Layout>
      <MainHeader variant="h1">
        cmario.net
      </MainHeader>

      <Grid container justifyContent="center">
        <Grid item>
          <TwitterButton username="cma2819" />
        </Grid>
        <Grid item>
          <GithubButton username="cma2819" />
        </Grid>
        <Grid item>
          <TwitchButton username="cma2819" />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
