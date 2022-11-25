import React, { ReactNode } from 'react';
import { Container, Divider, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { theme } from '../theme';
import '@fortawesome/fontawesome-free/css/all.css';

type Props = {
  title?: string;
  children?: ReactNode;
};

export const CardLayout = ({ title, children }: Props) => {
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

        <style global jsx>{`
          body {
            margin: 0
          }
        `}</style>
      </Container>
    </ThemeProvider>
  );
};