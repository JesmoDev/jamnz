import { useState } from "react";
import "./App.scss";

function App() {
  const DATA_FROM_API = {
    currency_name: "Danish krone",
    rate: "4.3977",
    rate_for_amount: "439.7705",
  };

  const PreciseRate = Number.parseFloat(DATA_FROM_API.rate_for_amount) / 100;

  const CLEAN_DATA_A = {
    name: "Danish Kroner",
    code: "DKK",
    rate: 1 / PreciseRate,
  };

  const CLEAN_DATA_B = {
    name: "New Zealand dollar",
    code: "NZD",
    rate: PreciseRate,
  };

  const [from, setFrom] = useState(CLEAN_DATA_B);
  const [to, setTo] = useState(CLEAN_DATA_A);

  const [amount, setAmount] = useState<Number | undefined>();

  const onAmountChange = (e: any) => {
    setAmount(Number.parseFloat(e.target.value));
  };

  const getRate = (rate: number) => {
    const result = rate * (typeof amount === "number" ? amount : 0);

    return Number.isNaN(result) ? "0.00" : result.toFixed(2);
  };

  return (
    <div className="app">
      <div className="main">
        <input autoFocus type="number" onChange={onAmountChange} />
        <div className="conversion">
          <div className="rate">
            {getRate(from.rate)} <span className="code">{to.code}</span>
          </div>
        </div>

        <div className="conversion">
          <div className="rate">
            {getRate(to.rate)} <span className="code">{from.code}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
