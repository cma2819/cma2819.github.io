import { Divider, Grid, Icon, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MainHeader } from '../MainHeader';

export const FooterCopyright = () => {
  return (
    <Box>
      <Divider sx={{
        marginY: 3,
      }} />
      <Grid container alignItems="center" justifyContent="end" spacing={2}>
        <Grid item xs={12} md="auto">
          <MainHeader variant="body2">&copy; 2021 cma2819</MainHeader>
        </Grid>
        <Grid item xs={12} md="auto">
          <MainHeader variant="body2">
            <IconButton
              aria-label="github-repository"
              href="https://github.com/cma2819/cma2819.github.io"
              target="_blank"
            >
              <Icon baseClassName="fab" className="fa-github" />
            </IconButton>
          </MainHeader>
        </Grid>
      </Grid>
    </Box>
  );
}