import React from 'react';

export default function Amount({ onValueChange, value }) {
  const handleChange = (event) => {
    const amount = event.target.value;
    onValueChange(amount);
  };
  // const handleScrollMove = (event) => {
  //   console.log(event);
  // };
  // const handleScrollMove = () => {
  //   console.log('ei linda');
  // };
  return (
    <div className="input-field col s4" id="amountID">
      <input
        type="number"
        className="validate center"
        min="100"
        step="1"
        // onScroll={handleScrollMove}
        onChange={handleChange}
        value={value}
      />
      <label
        className="active"
        forhtml="initial_amount"
        style={{ fontSize: '1.4rem' }}
      >
        Initial amount :
      </label>
    </div>
  );
}
