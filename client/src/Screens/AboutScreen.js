import React from 'react';
import './AboutScreen.css';

// Importing components


function AboutScreen() {
  return (
    <main>
      <div className="about-banner">
        {/* Add banner */}
      </div>
      <div className="about-box">
          <div className="about-header">
            <h2>ABOUT</h2>
          </div>
          <div className="about-body">
            <div className="about-info">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime ratione iure voluptatibus, aperiam dolores quaerat necessitatibus.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Adipisci aliquam esse, laborum quia veritatis alias et at a, sunt officiis voluptatem
              labore consequatur perspiciatis suscipit repudiandae voluptates consectetur dicta pariatur.
              </p>
            </div>
          </div>
        </div>
    </main>
  );
}

export default AboutScreen;