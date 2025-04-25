import React from 'react';

const Header = () => {
  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderTop: '7px solid #ccc',
      borderBottom: '3px solid #ccc',
      color: '#fff',
      fontSize: '20px',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      fontFamily: 'serif',
      letterSpacing: '0.5px',
      backgroundImage: 'linear-gradient(to right, rgb(117, 104, 108), rgb(47, 53, 67))',
    },
    titleBox: {
      backgroundColor: '#ececec',
      color: '#291712',
      padding: '10px 20px',
      borderRadius: '10px',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
      fontFamily: 'Georgia, serif',
      fontSize: '22px'
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    input: {
      padding: '7px',
      borderRadius: '10px',
      border: '1px solid #ccc',
      fontSize: '17px',
      width: '200px',
      backgroundColor: '#d0d4d5',
      color: '#333',
      fontFamily: 'cursive',
    },
    logoutBox: {
      backgroundColor: '#9e3b24',
      color: '#ccc',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '1px 1px 4px rgba(0,0,0,0.3)',
      fontFamily: 'sans-serif',
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.titleBox}>BITWIKI: Main Page</div>

      <div style={styles.right}>
        <input type="text" placeholder="Search BIT Wiki" style={styles.input} />
        <span>Rahul.k.ad424@bitsathy.ac.in</span>
        <button style={styles.logoutBox}>Log out</button>
      </div>
    </header>
  );
};

export default Header;
