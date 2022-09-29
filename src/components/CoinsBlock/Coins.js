import React from 'react';
import { Link } from 'react-router-dom';
import CoinInfo from '../../routes/CoinInfo';
import CoinItem from './CoinItem';

import styles from './Coins.module.scss';

const Coins = ({ coins }) => {
  return (
    <>
      <div className={styles.root}>
        <header>
          <div className={styles.heading}>
            <p>#</p>
            <p className={styles.coin_name}>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className={styles.hide_mobile}>Volume</p>
            <p className={styles.hide_mobile}>Mkt Cap</p>
          </div>

          {coins.map((coin) => {
            return (
              <Link to={`/coinInfo/${coin.id}`} element={<CoinInfo />} key={coin.id}>
                <CoinItem coin={coin} />
              </Link>
            );
          })}
        </header>
      </div>
    </>
  );
};

export default Coins;
