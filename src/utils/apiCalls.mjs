import axios from "axios";

const localURL = "http://localhost:8070/transactions/";

const StockKEY = "?token=cga50uhr01qqlesgdf0gcga50uhr01qqlesgdf10";

const StockURL = "https://finnhub.io/api/v1/stock/symbol";

export const GET_ALL_TRANSACTIONS = () => axios.get(localURL);

export const GET_IN_TRANSACTIONS = () => axios.get(`${localURL}in`);

export const GET_OUT_TRANSACTIONS = () => axios.get(`${localURL}out`);

export const POST_TRANSACTION = (transaction) => axios.post(localURL, transaction);

export const GET_US_STOCK = () => axios.get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cga50uhr01qqlesgdf0gcga50uhr01qqlesgdf10`);
