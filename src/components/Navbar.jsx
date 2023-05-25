import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#f5f5f5', // Light background color
    color: '#212121', // Dark text color
  },
  logoutButton: {
    backgroundColor: '#ffc107', // Yellow color shade
    color: '#212121', // Dark text color
    '&:hover': {
      backgroundColor: '#ffa000', // Darker shade on hover
    },
  },
});

const Navbar = ({ isLoggedIn, onLogout }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stock Sales App
        </Typography>
        {isLoggedIn && (
          <Button
            color="inherit"
            onClick={onLogout}
            className={classes.logoutButton}
          >
            Log out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
