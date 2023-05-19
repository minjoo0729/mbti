import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Main Page!</h1>
      <Link to="/question1">Start</Link>
    </div>
  );
};

export default Home;
