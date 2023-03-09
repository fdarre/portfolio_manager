import React, {useState} from 'react';
import AssetOverview from "./components/AssetOverview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {

      return (
        <div className="App">
            <Navbar />
            <AssetOverview />
            <Footer />
         </div>
      );
}

export default App;
