import React, { ReactNode } from 'react';
import { Container, Divider, GlobalStyles, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { theme } from '../theme';
import '@fortawesome/fontawesome-free/css/all.css';

type Props = {
  title?: string;
  children?: ReactNode;
};

export const NameCardLayout = ({ title, children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{ title && `${title} - `}cmario.net</title>
        <meta name="description" content="cmario.net" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <main>
          { children }
        </main>

        <GlobalStyles styles={{
          body: {
            margin: 0,
          }
        }} />
      </Container>
    </ThemeProvider>
  );
};