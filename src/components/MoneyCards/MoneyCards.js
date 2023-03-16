import "./MoneyCards.scss";

const MoneyCards = () => {
  return (
    <section className="money-cards">
      <article className="money-card">
        <p className="money-card__money">£2,000</p>
        <h3 className="money-card__heading">Income</h3>
      </article>

      <article className="money-card">
        <p className="money-card__money">£1,000</p>
        <h3 className="money-card__heading">Expenses</h3>
      </article>

      <article className="money-card">
        <p className="money-card__money">£1,200</p>
        <h3 className="money-card__heading">Budget</h3>
      </article>
    </section>
  );
};

export default MoneyCards;
