import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <Link to='/profile'>Profile</Link>
      <button
        onClick={() =>
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          })
        }
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
