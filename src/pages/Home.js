import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { FiSend } from "react-icons/fi";

const Home = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Expands the mini app UI
    }
  }, []);

  const connectWallet = () => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      const user = tg.initDataUnsafe?.user;

      if (user) {
        setWalletAddress(`0x${Math.random().toString(36).substr(2, 8)}`); // Dummy wallet address
      } else {
        alert("Failed to fetch Telegram user data!");
      }
    } else {
      alert("Telegram WebApp is not available!");
    }
  };

  return (
    <div className="home-container">
      <img src="./OmegaXBanner.png" alt="Banner" className="home-banner" />

      <div className="logo-container">
        <img src="./OmegaXLogo.png" alt="OmegaX Logo" className="logo-img" />
      </div>

      <div className="coins-section">
        <p className="coin-count">0</p>
        <p className="coin-count">$OmegaX</p>
      </div>

      <div className="telegram-section">
        <h3>Join Our Community</h3>
        <a href="https://t.me/OmegaX_Community" target="_blank" rel="noopener noreferrer" className="telegram-link">
          <FiSend className="telegram-icon" />
          Join on Telegram
        </a>
      </div>

      {walletAddress ? (
        <p className="wallet-address">Connected Wallet: {walletAddress}</p>
      ) : (
        <button className="connect-wallet-btn" onClick={connectWallet}>
          Connect Telegram Wallet
        </button>
      )}
    </div>
  );
};

export default Home;
