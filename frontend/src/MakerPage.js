// MakerPage
import React from 'react';
import SignupPage from './Signup';
import JobForm from './JobForm';

const MakerPage = () => {
  const [isSignedUp, setIsSignedUp] = React.useState(false);

  const handleSignupSuccess = () => {
    setIsSignedUp(true);
  };

  return (
    <>
      {!isSignedUp && (
        <SignupPage userType="maker" onSignupSuccess={handleSignupSuccess} />
      )}
      {isSignedUp && <JobForm />}
    </>
  );
};

export default MakerPage;
