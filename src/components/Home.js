import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight animated-text">Hena Kharwa</span>
        </h1>
        <p>
          Passionate about building intelligent, scalable AI solutions that power real-world impact.
        </p>
      </div>
    </div>
  );
};

export default Home;
