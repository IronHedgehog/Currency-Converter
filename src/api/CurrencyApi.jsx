import axios from "axios";

axios.defaults.baseURL = "https://api.apilayer.com";

const apiKey = "l4UbUiteeq7w9saUsmX4xOoLqdYwwQy7";

const fetchExchangeRate = async () => {
  const response = await axios.get(`/fixer/latest?base=USD&apikey=${apiKey}`);
  return response;
};

export default fetchExchangeRate;
