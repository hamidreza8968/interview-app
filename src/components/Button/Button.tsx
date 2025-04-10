import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink: React.FC = () => {
  return (
    <Link to="/home" style={{ color: 'black', backgroundColor: 'red', padding: '10px', textDecoration: 'none', display: 'inline-block' }}>
      Click here
    </Link>
  );
};

export default ButtonLink;
