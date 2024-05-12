import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="card p-5 text-center" style={{ width: '90%', maxWidth: '800px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '15px' }}>
        <h1 className="display-3 font-weight-bold text-uppercase">Welcome</h1>
        <p className="lead font-weight-bold text-uppercase">Always take Leaves</p>
        <p className="lead font-weight-bold text-uppercase">Happy Vacation</p>
      </div>
    </div>
  );
};

export default Home;
