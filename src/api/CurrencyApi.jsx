import axios from "axios";

const fetchExchangeRate = async () => {
  const response = await axios.get(
    "https://api.apilayer.com/fixer/latest?base=USD&apikey=x6df32tyZvuNqe34ra1RsOyHxkihxwIr"
  );
  return response;
};

export default fetchExchangeRate;
