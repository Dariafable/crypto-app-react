import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Coins from './components/CoinsBlock/Coins';
import NavBar from './components/NavBar/NavBar';
import CoinInfo from './routes/CoinInfo';

function App() {
  const [coins, setCoins] = useState([]);

  const coinsUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h';

  useEffect(() => {
    axios
      .get(coinsUrl)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coinInfo' element={<CoinInfo />}>
          <Route path=':coinId' element={<CoinInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
