import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Callback from './pages/Callback';

function App() {
  const auth0 = useAuth0();
  console.log('app route: auth0 hooks', auth0);
  const { isAuthenticated, isLoading } = useAuth0();

  console.log('app route: isAuthenticated', isAuthenticated);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/home" />}
      />
      <Route
        path="/profile"
        element={isAuthenticated ? <Profile /> : <Navigate to="/home" />}
      />
      <Route path="/callback" element={<Callback />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
