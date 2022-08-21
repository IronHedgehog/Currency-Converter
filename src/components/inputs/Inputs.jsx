import PropTypes from "prop-types";
import s from "./inputs.module.scss";

const CurrencyInput = ({
  onAmountChange,
  onCurrencyChange,
  currencies,
  amount,
  currency,
}) => {
  return (
    <div className={s.group}>
      <input
        className={s.currencyInput}
        type="number"
        value={amount ? amount : ""}
        onChange={(ev) => onAmountChange(ev.target.value)}
      />
      <select
        className={s.currencySelect}
        value={currency}
        onChange={(ev) => onCurrencyChange(ev.target.value)}
      >
        {currencies.map((currency) => (
          <option className={s.currencyOptions} key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
