import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default Home;
