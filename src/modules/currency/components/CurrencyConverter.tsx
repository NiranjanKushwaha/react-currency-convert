import React, { useState } from "react";
import { CurrencyProps } from "../../../interface/currency.interface";

const CurrencyConverter: React.FC<CurrencyProps> = ({
  onConvert,
  fromCurrencyDropdownData = ["USD", "EUR", "INR", "GBP"],
  toCurrencyDropdownData = ["USD", "EUR", "INR", "GBP"],
  allowedAmountDigitsCount=7,
  convertCurrencyBtnText="Convert Currency"
}) => {
  const [fromCurrency, setFromCurrency] = useState<string>(
    ""
  );
  const [toCurrency, setToCurrency] = useState<string>(
    ""
  );
  const [amount, setAmount] = useState<number>(0);

  const handleFromCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value ? Number(value) : 0);
  };

  const handleConvert = () => {
    onConvert(fromCurrency, toCurrency, amount);
  };

  return (
    <div className="d-flex w-100 gap-2">
      <select
        className="form-select"
        value={fromCurrency}
        onChange={handleFromCurrencyChange}
        name="fromCurrencySelect"
      >
        <option  id="fromCurrencySelect" value="">Select from currency</option>
        {fromCurrencyDropdownData.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <select
        className="form-select"
        value={toCurrency}
        onChange={handleToCurrencyChange}
        name="toCurrencySelect"
      >
        <option  id="toCurrencySelect" value="">Select to currency</option>
        {toCurrencyDropdownData.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
        inputMode="numeric"
        onKeyPress={(e) => {
          const target = e.target as HTMLInputElement;
          const isValidInput = /^[0-9\b]+$/.test(e.key);
          if (!isValidInput || target.value.length>allowedAmountDigitsCount) {
              e.preventDefault();
          }
      }}
        className="form-control w-100"
      />
      <button onClick={handleConvert}>{convertCurrencyBtnText}</button>
    </div>
  );
};

export default CurrencyConverter;
