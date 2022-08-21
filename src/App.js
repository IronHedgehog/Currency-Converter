import "./App.module.scss";
import CurrencyInput from "./components/inputs/Inputs.jsx";
import { useState, useEffect, useCallback } from "react";
import fetchExchangeRate from "./api/CurrencyApi";
import Header from "./components/Header/Header";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchExchangeRate();
        setRates(data.rates);
      } catch (error) {
        console.log("free plan end", error);
      }
    })();
  }, []);

  const handleAmount1Change = useCallback(
    (amount1) => {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
      setAmount1(amount1);
    },
    [currency1, currency2, rates]
  );

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates, handleAmount1Change]);

  const format = (number) => {
    return Number(number.toFixed(2));
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };

  return (
    <>
      <Header
        UAH={rates?.UAH ? rates?.UAH : 0.0}
        EUR={rates?.EUR ? rates?.EUR : 0.0}
        USD={rates?.USD ? rates?.USD : 0.0}
      />
      <h1>Currency Converter</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={Number(amount1) ? Number(amount1) : null}
        currency={currency1}
      />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={Number(amount2) ? Number(amount2) : null}
        currency={currency2}
      />
    </>
  );
}

export default App;
