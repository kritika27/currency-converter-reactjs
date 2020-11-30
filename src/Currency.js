import React from "react";

const Currency = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
  curr,
  toAmount,
  onChangeToCurrency,
}) => {
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        className="select"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="equals">
        <i className="fa fa-arrow-down"></i>
      </div>

      <p style={{ color: "black" }}>{toAmount}</p>
      <select className="select" value={curr} onChange={onChangeToCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Currency;
