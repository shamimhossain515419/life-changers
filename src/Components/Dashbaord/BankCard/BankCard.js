// components/BankCard.js

import React from 'react';
 import './index.css'
function BankCard() {
  return (
    <div className="bank-card">
      <div className="bank-card__header">
        <div className="bank-card__chip"></div>
        <div className="bank-card__logo">Life changer</div>
      </div>
      <div className="bank-card__number">
        <span>1234</span>
        <span>5678</span>
        <span>9012</span>
        <span>3456</span>
      </div>
      <div className="bank-card__footer">
        <div className="bank-card__name">Shamim Hossain</div>
        <div className="bank-card__expiry">MM/YY</div>
      </div>
    </div>
  );
}

export default BankCard;
