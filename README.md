# React Currency Converter

A lightweight and customizable currency converter component for React applications. Easily integrate currency conversion functionality with customizable dropdowns for selecting currencies and an input for the amount.

## Features

- Customizable currency dropdowns for both "from" and "to" currencies.
- Customizable button text for performing the conversion.
- Restriction on the number of digits allowed in the amount input.
- Callback function to handle the conversion logic externally.

## Installation

To install the React Currency Converter, run the following command in your project directory:

```bash

npm install react-currency-convert

```

or if you use yarn:

```bash

yarn add react-currency-convert

```

## Usage

First, import the `CurrencyConverter` component into your React component file:

```javascript

import React from 'react';
import { CurrencyConverter } from 'react-currency-convert';

```

Then, use the `CurrencyConverter` component in your React application. You must provide a callback function (`onConvert`) to handle the conversion logic:

```javascript

import React from 'react';
import { CurrencyConverter } from 'react-currency-convert';

const App = () => {
  const handleConversion = (fromCurrency, toCurrency, amount) => {
    // Implement your conversion logic here
    console.log(`Convert ${amount} from ${fromCurrency} to ${toCurrency}`);
  };

  return (
    <div>
      <CurrencyConverter onConvert={handleConversion} />
    </div>
  );
};

export default App;

```

## Props

The `CurrencyConverter` component accepts the following props for customization:

- `onConvert`: A function that is called when the conversion button is clicked. It receives three arguments: `fromCurrency`, `toCurrency`, and `amount`.
- `fromCurrencyDropdownData` (optional): An array of strings representing the currencies available in the "from" dropdown. Default is `["USD", "EUR", "INR", "GBP"]`.
- `toCurrencyDropdownData` (optional): An array of strings representing the currencies available in the "to" dropdown. Default is `["USD", "EUR", "INR", "GBP"]`.
- `allowedAmountDigitsCount` (optional): A number representing the maximum number of digits allowed in the amount input. Default is `7`.
- `convertCurrencyBtnText` (optional): A string to customize the text of the conversion button. Default is `"Convert Currency"`.

## Example

Here's a complete example showing how to use the `CurrencyConverter` component with custom props:

```javascript
f0e491ae-9e0d-42fa-aae9-05faa25607fd

import React from 'react';
import { CurrencyConverter } from 'react-currency-convert';

const App = () => {
  const handleConversion = (fromCurrency, toCurrency, amount) => {
    // Conversion logic
    alert(`Converting ${amount} from ${fromCurrency} to ${toCurrency}`);
  };

  return (
    <CurrencyConverter
      onConvert={handleConversion}
      fromCurrencyDropdownData={["USD", "CAD", "EUR"]}
      toCurrencyDropdownData={["INR", "JPY", "GBP"]}
      allowedAmountDigitsCount={5}
      convertCurrencyBtnText="Exchange"
    />
  );
};

export default App;

```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to adjust the content to better fit your component's functionality or to add any additional sections that you think might be helpful for users.