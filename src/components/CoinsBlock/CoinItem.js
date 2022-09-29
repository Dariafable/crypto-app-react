import React from 'react';

import styles from './CoinItem.module.scss';

const CoinItem = ({ coin }) => {
  return (
    <>
      <div className={styles.root}>
        <p>{coin.market_cap_rank}</p>
        <div className={styles.symbol}>
          <img src={coin.image} alt='' />
          <p>{coin.symbol.toUpperCase()}</p>
        </div>
        <p>€{coin.current_price.toLocaleString('de-DE')}</p>
        <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        <p className={styles.hide_mobile}>€{coin.total_volume.toLocaleString('de-DE')}</p>
        <p className={styles.hide_mobile}>€{coin.market_cap.toLocaleString('de-DE')}</p>
      </div>
    </>
  );
};

export default CoinItem;
