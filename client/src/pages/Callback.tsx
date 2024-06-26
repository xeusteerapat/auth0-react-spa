import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigate('/dashboard');
      } else {
        navigate('/home');
      }
    }, 2000); // Need the delay to allow the auth0 state to update

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  return <div>Loading...</div>;
};

export default Callback;
