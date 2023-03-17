import { useEffect, useState } from "react";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import { GET_ALL_TRANSACTIONS } from "../../utils/apiCalls.mjs";
import "./DashboardAll.scss";

const DashboardAll = () => {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data } = await GET_ALL_TRANSACTIONS();
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
    <section className="all">
      <h2 className="all__heading">All Transactions</h2>
      <div className="all__list">
        {transactions.map((transaction) => {
          return (
            <TransactionCard key={transaction.id} transaction={transaction} />
          );
        })}
      </div>
    </section>
  );
};

export default DashboardAll;
