import React, { useState } from 'react';
import Header from './components/header/Header';
import Amount from './components/amount_Input/Amount';
import InterestRate from './components/interest_Rate_Input/InterestRate';
import Period from './components/period/Period';
import Installments from './components/installments/Installments';

export default function App() {
  const [initialValue, setInitialValue] = useState(100);
  const [interestRate, setInterestRate] = useState(0.1);
  const [installments, setInstallments] = useState(1);

  const handleAmountChange = (Initialamount) => {
    setInitialValue(Initialamount);
  };
  const handleInstallmentsChange = (installments) => {
    setInstallments(installments);
  };
  const handleRateChange = (rate) => {
    setInterestRate(rate);
  };

  return (
    <div>
      <Header />
      <div className="flex-row">
        <Amount onValueChange={handleAmountChange} value={initialValue} />
        <InterestRate onValueChange={handleRateChange} value={interestRate} />
        <Period onValueChange={handleInstallmentsChange} value={installments} />
      </div>
      <Installments
        initial={initialValue}
        setInitial={setInitialValue}
        rate={interestRate}
        period={installments}
      />
    </div>
  );
}
