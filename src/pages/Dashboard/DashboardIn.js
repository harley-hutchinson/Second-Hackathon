import { useEffect, useState } from "react";
import TransactionCard from "../../components/TransactionCard/TransactionCard.js";
import { GET_IN_TRANSACTIONS } from "../../utils/apiCalls.mjs";
import "./DashboardIn.scss";

const DashboardIn = () => {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data } = await GET_IN_TRANSACTIONS();
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
    <section className="in">
      <h2 className="in__heading">In</h2>
      <div className="in__list">
        {transactions.map((transaction) => {
          return (
            <TransactionCard key={transaction.id} transaction={transaction} />
          );
        })}
      </div>
    </section>
  );
};

export default DashboardIn;
