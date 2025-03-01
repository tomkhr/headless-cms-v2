import React from 'react';

const SiteHeader = () => {
  const styles = {
    headerDiv: {
      width: '100%',
      minHeight: '70px',
      backgroundColor: '#141414',
      display: 'flex',
      justifyContent: 'center', // Centered content
      alignItems: 'center',
      padding: '0 20px',
      color: '#fff'
    }
  };

  return (
    <div style={styles.headerDiv}>
      <h1>This is the SiteHeader</h1>
    </div>
  );
};

export default SiteHeader;
