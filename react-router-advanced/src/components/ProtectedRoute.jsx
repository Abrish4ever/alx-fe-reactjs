import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Simulated authentication status

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
