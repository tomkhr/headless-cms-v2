import React from 'react';
import '../app/globals.css';

const SiteHeader = () => {

// the following used to be the class styles for the header


  // const styles = {
  //   headerDiv: {
  //     width: '100%',
  //     minHeight: '100px',
  //     backgroundColor: '#171717',
  //     borderBottom: '1px solid #333333',
  //     boxShadow: '10px 0px 25px #0a0a0a',
  //     display: 'flex',
  //     justifyContent: 'space-between', // Centered content
  //     alignItems: 'center',
  //     padding: '0 20px',
  //     color: '#fff',
  //     position: 'fixed',
  //     display: 'flex',
  //   }
  // };

  return (
    // <div style={styles.headerDiv} - used to be the style that took code from the styles const above
    <div className='header'>
      <div>
        <h1 style={{color: '#dfff0e'}}>Tom Khrustalev</h1>
        <h2>Online Portfolio Boilerplate</h2>
      </div>
      <div className='nav_links'>
          <a href='https://artkhr.webflow.io' target='blank'>Old Portfolio</a>

          <a href='http://linkedin.com/in/artkhr/' target='blank'>LinkedIn</a>

          <a href='https://github.com/tomkhr' target='blank'>GitHub</a>
          
       </div>
    </div>
  );
};

export default SiteHeader;
