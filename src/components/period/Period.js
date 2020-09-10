import React from 'react';

export default function Period({ onValueChange, value }) {
  const handleChange = (event) => {
    const installments = event.target.value;
    onValueChange(installments);
  };
  return (
    <div className="input-field col s4">
      <input
        type="number"
        className="validate center"
        min="1"
        onChange={handleChange}
        value={value}
      />
      <label
        style={{ fontSize: '1.4rem' }}
        className="active"
        forhtml="installments"
      >
        Installments :
      </label>
    </div>
  );
}
