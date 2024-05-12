import React from 'react';

const PageNotFound = () => {
  return (
    <div className="container mt-5">
      <div className="alert alert-danger text-center" role="alert">
        <h1 className="display-4">404 - Page Not Found</h1>
        <p className="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
