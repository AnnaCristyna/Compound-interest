import React, { useState, useEffect } from 'react';
import Installment from './Installment';

export default function Installments({ initial, rate, period }) {
  const [perPeriods, setperPeriods] = useState([]);
  useEffect(() => {
    let objectData = [];
    let amountValue = initial;
    for (let t = 1; t <= period; t++) {
      amountValue = initial * Math.pow(1 + rate / 100, t);
      objectData[t] = {
        id: t,
        amount: amountValue,
        difference: amountValue - initial,
        rate: (amountValue * 100) / initial - 100,
      };
    }
    setperPeriods(objectData);
    return () => {
      objectData = {};
    };
  }, [initial, period, rate]);
  return (
    <div>
      <Installment perPeriods={perPeriods} />
    </div>
  );
}
