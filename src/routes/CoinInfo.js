import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axios from 'axios';

import styles from './CoinInfo.module.scss';

const CoinInfo = () => {
  const params = useParams();
  const [coinInfo, setCoinInfo] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoinInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div className={styles.root}>
        <div className={styles.content}>
          <h1>{coinInfo.name}</h1>
        </div>
        {/* Title content end */}

        <div className={styles.content}>
          <div className={styles.rank}>
            <span className={styles.rankBtn}>Rank # {coinInfo.market_cap_rank}</span>
          </div>

          <div className={styles.info}>
            <div className={styles.coinHeading}>
              {coinInfo.image ? <img src={coinInfo.image.small} alt='' /> : null}
              <p>{coinInfo.name}</p>
              {coinInfo.symbol ? <p>{coinInfo.symbol.toUpperCase()}/EUR</p> : null}
            </div>

            <div className={styles.coinPrice}>
              {coinInfo.market_data?.current_price ? (
                <h1>€{coinInfo.market_data.current_price.eur.toLocaleString('de-DE')}</h1>
              ) : null}
            </div>
          </div>
        </div>
        {/* Info content end */}

        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coinInfo.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coinInfo.market_data.price_change_percentage_1h_in_currency.eur.toFixed(1)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coinInfo.market_data.price_change_percentage_24h_in_currency.eur.toFixed(1)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_7d_in_currency ? (
                    <p>
                      {coinInfo.market_data.price_change_percentage_7d_in_currency.eur.toFixed(1)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_14d_in_currency ? (
                    <p>
                      {coinInfo.market_data.price_change_percentage_14d_in_currency.eur.toFixed(1)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_30d_in_currency ? (
                    <p>
                      {coinInfo.market_data.price_change_percentage_30d_in_currency.eur.toFixed(1)}%
                    </p>
                  ) : null}
                </td>
                <td>
                  {coinInfo.market_data?.price_change_percentage_1y_in_currency ? (
                    <p>
                      {coinInfo.market_data.price_change_percentage_1y_in_currency.eur.toFixed(1)}%
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table content end */}

        <div className={styles.content}>
          <div className={styles.stats}>
            <div className={styles.left}>
              <div className={styles.row}>
                <h4>24 Hour Low</h4>
                {coinInfo.market_data?.low_24h ? (
                  <p>€{coinInfo.market_data.low_24h.eur.toLocaleString('de-DE')}</p>
                ) : null}
              </div>
              <div className={styles.row}>
                <h4>24 Hour High</h4>
                {coinInfo.market_data?.high_24h ? (
                  <p>€{coinInfo.market_data.high_24h.eur.toLocaleString('de-DE')}</p>
                ) : null}
              </div>
            </div>
            {/* left end */}
            <div className={styles.right}>
              <div className={styles.row}>
                <h4>Market cap</h4>
                {coinInfo.market_data?.market_cap ? (
                  <p>€{coinInfo.market_data.market_cap.eur.toLocaleString('de-DE')}</p>
                ) : null}
              </div>
              <div className={styles.row}>
                <h4>Circulating Supply</h4>
                {coinInfo.market_data?.market_cap ? (
                  <p>{coinInfo.market_data.circulating_supply.toLocaleString('de-DE')}</p>
                ) : null}
              </div>
            </div>
            {/* right end */}
          </div>
        </div>
        {/* Stats content end */}

        <div className={styles.content}>
          <div className={styles.about}>
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coinInfo.description ? coinInfo.description.en : ''),
              }}
            ></p>
          </div>
        </div>
        {/* Description (About) content end */}
      </div>
    </>
  );
};

export default CoinInfo;
