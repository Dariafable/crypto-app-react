import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Link to='/'>
      <div className={styles.root}>
        <FaCoins className={styles.icon} />
        <h1>
          Coin <span className={styles.blue}>Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default NavBar;
