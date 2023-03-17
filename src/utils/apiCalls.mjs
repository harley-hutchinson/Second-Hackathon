import axios from "axios";

const localURL = "http://localhost:8070/transactions/";

export const GET_TRANSACTIONS = () => axios.get(localURL);
