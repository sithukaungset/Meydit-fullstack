// MakerPage.js
import React, { useState } from 'react';
import MakerSignup from './MakerSignup';
import Maker from './Maker';

const MakerPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <Maker />
  ) : (
    <MakerSignup onSuccessfulAuth={handleAuthentication} />
  );
};

export default MakerPage;
