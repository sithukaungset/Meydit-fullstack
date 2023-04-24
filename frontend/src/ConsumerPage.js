// ConsumerPage.js
import React, { useState } from 'react';
import Consumer from './Consumer';
import ConsumerSignup from './ConsumerSignup';

const ConsumerPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <Consumer />
  ) : (
    <ConsumerSignup onSuccessfulAuth={handleAuthentication} />
  );
};

export default ConsumerPage;