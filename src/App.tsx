import './App.css'
import CurrencyConverter from './modules/currency/components/CurrencyConverter'


function App() {
  const onConvert=(fromCurrency:string, toCurrency:string, amount:number)=>{
    console.log(`from currency: ${fromCurrency},toCurrency:${toCurrency} and amount is: ${amount}`);
  }
  return(
    <>
    <CurrencyConverter onConvert={onConvert}/>
    </>
  )
}

export default App
