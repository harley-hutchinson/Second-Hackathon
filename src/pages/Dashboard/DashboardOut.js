import { useEffect, useState } from "react";
import TransactionCard from "../../components/TransactionCard/TransactionCard.js";
import { GET_OUT_TRANSACTIONS } from "../../utils/apiCalls.mjs";
import "./DashboardOut.scss";

const DashboardOut = () => {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data } = await GET_OUT_TRANSACTIONS();
        setTransactions(data);
      } catch (error) {
        console.log(error);
      }
    };

    getTransactions();
  }, []);

  if (!transactions) {
    return <p>loading...</p>;
  }
  return (
    <section className="out">
      <h2 className="out__heading">Out</h2>
      <div className="out__list">
        {transactions.map((transaction) => {
          return (
            <TransactionCard key={transaction.id} transaction={transaction} />
          );
        })}
      </div>
    </section>
  );
};

export default DashboardOut;
