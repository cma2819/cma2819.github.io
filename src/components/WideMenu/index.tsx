import React from 'react';
import { Button, Grid } from '@mui/material';
import { Box, styled } from '@mui/system';
import { NextLinkComposed } from '../Link';

const menuPaths: {
  name: string;
  pathname: string;
}[] = [
  { name: 'Top', pathname: '/' },
  { name: 'Careers', pathname: '/careers' },
];

const Item = styled(Box)(() => ({
  padding: 16,
}));

export const WideMenu = () => {
  return (
    <Grid container justifyContent="center">
      {
        menuPaths.map((menu) => (
          <Grid item key={menu.name}>
            <Item>
              <Button
                variant="text"
                component={NextLinkComposed}
                to={{
                  pathname: menu.pathname,
                }}
              >
                { menu.name }
              </Button>
            </Item>
          </Grid>
        ))
      }
    </Grid>
  )
}