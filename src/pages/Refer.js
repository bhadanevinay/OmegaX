import React, { useEffect, useState } from "react";
import "../styles/Refer.css";
import { FiCopy, FiShare2, FiUser } from "react-icons/fi";

const Refer = () => {
  const [referralLink, setReferralLink] = useState("");
  const [invitedUsers, setInvitedUsers] = useState([]);
  const [totalInvites, setTotalInvites] = useState(0);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      const userId = tg.initDataUnsafe?.user?.id;

      if (userId) {
        setReferralLink(`https://yourwebsite.com/refer?ref=${userId}`);
        fetchInvitedUsers(userId);
      } else {
        setReferralLink("Login via Telegram to get your referral link.");
      }
    }
  }, []);

  const fetchInvitedUsers = async (userId) => {
    try {
      const response = await fetch(`https://your-backend.com/api/get-invites?ref=${userId}`);
      const data = await response.json();
      setInvitedUsers(data.invitedUsers);
      setTotalInvites(data.totalInvites);
    } catch (error) {
      console.error("Error fetching invited users:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join OmegaX and Earn Crypto!",
        text: "Earn $OmegaX by completing tasks and referring friends. Sign up now!",
        url: referralLink,
      });
    } else {
      alert("Sharing not supported. Copy the link manually.");
    }
  };

  return (
    <div className="refer-container">
      <h1>Refer & Earn</h1>
      <p>Invite friends and earn $OmegaX for every successful referral.</p>

      <div className="referral-box">
        <input type="text" value={referralLink} readOnly className="referral-link" />
        <button className="copy-btn" onClick={copyToClipboard}>
          <FiCopy /> Copy
        </button>
      </div>

      <button className="share-btn" onClick={shareReferralLink}>
        <FiShare2 /> Share
      </button>

      {/* Invited Users Section */}
      <div className="invites-section">
        <h2>Total Invites: {totalInvites}</h2>
        <ul className="invited-users">
          {invitedUsers.length > 0 ? (
            invitedUsers.map((user, index) => (
              <li key={index} className="invited-user">
                <FiUser className="user-icon" /> {user.username || `User ${user.id}`}
              </li>
            ))
          ) : (
            <p>No invited users yet. Start referring now!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Refer;
