import "./MoneyCards.scss";
import moneyBag from "../../assets/icons/Bag of money.svg";
import cart from "../../assets/icons/Cart.svg";
import moneyBox from "../../assets/icons/Money-box.svg";

const MoneyCards = ({ modalOpenHandler, budget, income, out }) => {
  return (
    <section className="money-cards">
      <article className="money-card">
        <img src={moneyBag} alt="bag of money" className="money-card__img" />
        <h3 className="money-card__heading">£{income}</h3>
        <p className="money-card__money">Income</p>
      </article>

      <article className="money-card">
        <img src={cart} alt="bag of money" className="money-card__img" />
        <h3 className="money-card__heading">£{out}</h3>
        <p className="money-card__money">Expenses</p>
      </article>

      <article className="money-card" onClick={modalOpenHandler}>
        <img src={moneyBox} alt="bag of money" className="money-card__img" />
        <h3 className="money-card__heading">{budget}</h3>
        <p className="money-card__money">Budget</p>
      </article>
    </section>
  );
};

export default MoneyCards;
