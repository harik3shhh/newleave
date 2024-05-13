import React from 'react';
import back from "../../src/assets/back.jpg"

const Home = () => {
  const unsplashUrl = 'https://source.unsplash.com/1600x900/?travel/vacation'; 
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100"
      style={{
        
        backgroundImage: `url(${unsplashUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="card p-5 text-center" style={{ width: '90%', maxWidth: '800px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h1 className="display-3 font-weight-bold text-uppercase">Welcome</h1>
        <p className="lead font-weight-bold text-uppercase">Always take Leaves</p>
        <p className="lead font-weight-bold text-uppercase">Happy Vacation</p>
      </div>
    </div>
  );
};

export default Home;
