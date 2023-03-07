import React, {useState} from 'react';
import AssetOverview from "./components/AssetOverview";
import './App.css';

function App() {


    //state
    const [fetchedPrice, setFetchedPrice] = useState<number>(0);

    //behaviour
    const FetchPromise = fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
    const dataPromise = FetchPromise.then((response) => response.json());
    const price = dataPromise.then((data) => setFetchedPrice(data.price));


    //render
      return (
        <div className="App">
            <AssetOverview name="Ethereum" symbol="ETH" price={fetchedPrice} />
         </div>
      );
}

export default App;
