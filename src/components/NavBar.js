import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button} from '@mui/material';

const Menu = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.primary.contrastText,
  width: '100%', // Ensure the navigation bar spans the entire width
}));

const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function NavBar() {
  return (
    <Box sx={{ width: '100%', flexGrow: 1}}>
      <Grid container direction="column">
        <Grid item>
          <Menu elevation={3}>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Events</Button>
            <Button>Resources</Button>
          </Menu>
        </Grid>
        <Grid item xs>
          <Content>
            Main Content
          </Content>
        </Grid>
      </Grid>
    </Box>
  );
}
