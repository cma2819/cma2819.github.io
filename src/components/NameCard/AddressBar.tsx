import { Grid, Paper, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import RefreshIcon from '@mui/icons-material/Refresh';

export const AddressBar = () => {
  return (
    <Paper sx={{
      color: 'grey.200',
      backgroundColor: 'grey.500',
    }}>
      <Grid
        container
        alignItems='center'
        sx={{
          width: '40vw',
          paddingX: 1,
          paddingTop: 0.5,
        }}
      >
        <Grid item>
          <LanguageIcon />
        </Grid>
        <Grid item xs>
          <Typography variant='body2' sx={{
            textAlign: 'center',
          }}>
            cmario.net
          </Typography>
        </Grid>
        <Grid item>
          <RefreshIcon />
        </Grid>
      </Grid>
    </Paper>
  );
};