import React, { useEffect, useState } from "react";
import "./App.css";
import Currency from "./Currency";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const firstCurrency = Object.keys(data.rates)[0];

        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);

        setFromCurrency(data.base);
        setToCurrency(firstCurrency);

        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
  }

  return (
    <>
      <div className="box">
        <h1>Currency Converter</h1>
        <Currency
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={amount}
          curr={toCurrency}
          onChangeToCurrency={(e) => setToCurrency(e.target.value)}
          toAmount={amount * exchangeRate}
        />
      </div>
    </>
  );
}

export default App;
