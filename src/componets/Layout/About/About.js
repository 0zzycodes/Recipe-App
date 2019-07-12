import React from 'react';
const About = () => {
  const style = {
    color: 'gray',
    textAlign: 'center',
    // height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <div style={style}>
      <div>
        <h1>Verson</h1>
        <p>1.0.1</p>
      </div>
    </div>
  );
};

export default About;
