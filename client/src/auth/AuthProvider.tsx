import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

type Auth0ProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Auth0ProviderProps> = ({ children }) => {
  console.log('auth provider', window.location.origin);
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_APP_AUTH0_DOMAIN as string}
      clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: window.location.origin + '/callback',
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
