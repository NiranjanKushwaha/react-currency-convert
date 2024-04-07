export interface CurrencyProps {
  onConvert: (from: string, to: string, amount: number) => void;
  fromCurrencyDropdownData?: string[];
  toCurrencyDropdownData?: string[];
  allowedAmountDigitsCount?:number;
  convertCurrencyBtnText?:string;
}
