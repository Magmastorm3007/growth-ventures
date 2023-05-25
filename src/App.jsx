import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Modal, Typography, Box } from '@mui/material';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { styled } from '@mui/system';

const CustomApp = styled(Box)`
  background: linear-gradient(to bottom, #000000, #0ff);
  min-height: 100vh;
  transition: background 0.5s;
`;

const modalStyles = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    outline: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '16px',
    width: '100%',
  },
};

function App() {
  const [showModal, setShowModal] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const responseMessage = (response) => {
    console.log(response);
    setIsLoggedIn(true);
    closeModal();
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowModal(true);
  };

  return (
    <>
  <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    <CustomApp>
    
      <Modal open={showModal} onClose={closeModal} sx={modalStyles.overlay}>
        <Box sx={modalStyles.content}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <Box sx={modalStyles.buttonContainer}></Box>
        </Box>
      </Modal>
      {isLoggedIn && <Home />}
    </CustomApp>
    </>
  );
}

export default App;
