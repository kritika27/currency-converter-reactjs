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

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        var key = Object.keys(data.rates).sort(function order(key1, key2) {
          if (key1 < key2) return -1;
          else if (key1 > key2) return +1;
          else return 0;
        });
=======
        const firstCurrency = Object.keys(data.rates)[0];
>>>>>>> babbf3586fb427a62ef662ff2089889dacb2dbd9

        // Taking the object in 'temp' object
        // and deleting the original object.
        var temp = {};
        for (var i = 0; i < key.length; i++) {
          temp[key[i]] = data.rates[key[i]];
          delete data.rates[key[i]];
        }

        for (i = 0; i < key.length; i++) {
          data.rates[key[i]] = temp[key[i]];
        }

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
