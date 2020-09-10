import React from 'react';

export default function InterestRate({ onValueChange, value }) {
  const handleChange = (event) => {
    const InterestRate = event.target.value;
    onValueChange(InterestRate);
  };
  return (
    <div
      className="input-field col s5"
      style={{ width: '25%', maxWidth: '150px' }}
    >
      <input
        type="number"
        className="validate center"
        min="-12"
        max="12"
        onChange={handleChange}
        value={value}
        step="0.1"
      />
      <label
        className="active"
        forhtml="insterest_rate"
        style={{ fontSize: '1.4rem' }}
      >
        Insterest Rate :
      </label>
    </div>
  );
}
