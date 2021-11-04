import React, { ReactNode } from 'react';
import { Container, Divider, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { WideMenu } from '../components/WideMenu';
import { theme } from '../theme';
import '@fortawesome/fontawesome-free/css/all.css';
import { FooterCopyright } from './FooterCopyright';

type Props = {
  title?: string;
  children?: ReactNode;
};

export const Layout = ({ title, children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{ title && `${title} - `}cmario.net</title>
        <meta name="description" content="cmario.net" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <header>
          <WideMenu />
        </header>

        <main>
          { children }
        </main>

        <footer>
          <FooterCopyright />
        </footer>
      </Container>
    </ThemeProvider>
  );
};