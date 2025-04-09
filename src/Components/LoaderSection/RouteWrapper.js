import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';

const RouteWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Adjust time as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <Loader />;
  }

  return children;
};

export default RouteWrapper;