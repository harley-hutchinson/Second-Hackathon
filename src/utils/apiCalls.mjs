import axios from "axios";

const localURL = "http://localhost:8070/transactions/";

export const GET_ALL_TRANSACTIONS = () => axios.get(localURL);

export const GET_IN_TRANSACTIONS = () => axios.get(`${localURL}in`);

export const GET_OUT_TRANSACTIONS = () => axios.get(`${localURL}out`);

export const POST_TRANSACTION = (transaction) =>
  axios.post(localURL, transaction);
