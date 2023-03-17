import "./TransactionCard.scss";
import income from "../../assets/icons/Bag of money.svg";
import downArrow from "../../assets/icons/Arrow-4.svg";

const TransactionCard = ({ transaction }) => {
  return (
    <article className="transaction">
      <div className="transaction__details">
        <img
          src={transaction.isIncome ? income : downArrow}
          alt="transaction type"
          className="transaction__type"
        />
        <div className="transaction__text">
          <h3 className="transaction__heading">{transaction.title}</h3>
          <p className="transaction__date">{transaction.date}</p>
        </div>
      </div>
      <h3
        className={
          transaction.isIncome ? "transaction__in" : "transaction__out"
        }
      >
        {transaction.isIncome ? "+ £" : "- £"}
        {transaction.amount}
      </h3>
    </article>
  );
};

export default TransactionCard;
