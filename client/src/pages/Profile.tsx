import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Profile;
