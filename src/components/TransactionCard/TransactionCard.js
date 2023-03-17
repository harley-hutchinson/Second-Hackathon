import "./TransactionCard.scss";

const TransactionCard = ({ transaction }) => {
  return (
    <article className="transaction">
      <h3 className="transaction__heading">{transaction.title}</h3>
      <p className="transaction__category">{transaction.category}</p>
      <p className="transaction__desc">{transaction.description}</p>
      <h3 className="transaction__amount">{transaction.amount}</h3>
    </article>
  );
};

export default TransactionCard;
