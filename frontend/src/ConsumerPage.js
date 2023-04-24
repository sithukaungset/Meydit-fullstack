// Consumer Page
import React from 'react';
import SignupPage from './Signup';
import Consumer from './Consumer';

const ConsumerPage = () => {
    const [isSignedUp, setIsSignedUp] = React.useState(false);

    const handleSignupSuccess = () => {
        setIsSignedUp(true);
    };

    return (
      <>
        {!isSignedUp && (
            <SignupPage userType="consumer" onSignupSuccess={handleSignupSuccess} />
        )}
        {isSignedUp && <Consumer />}
    </>
  );
};

export default ConsumerPage;
