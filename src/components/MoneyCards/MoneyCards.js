import "./MoneyCards.scss";

const MoneyCards = () => {
  return (
    <section className="money-cards">
      <article className="money-card">
        <h3 className="money-card__money">£2,000</h3>
        <p className="money-card__heading">Income</p>
      </article>

      <article className="money-card">
        <h3 className="money-card__money">£1,000</h3>
        <p className="money-card__heading">Expenses</p>
      </article>

      <article className="money-card">
        <h3 className="money-card__money">£1,200</h3>
        <p className="money-card__heading">Budget</p>
      </article>
    </section>
  );
};

export default MoneyCards;
