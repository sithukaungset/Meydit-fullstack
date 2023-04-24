// ConsumerPage.js
import React, { useState } from 'react';
import Consumer from './Consumer';
import Signup from './Signup';

const ConsumerPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <Consumer />
  ) : (
    <Signup onSuccessfulAuth={handleAuthentication} />
  );
};

export default ConsumerPage;
