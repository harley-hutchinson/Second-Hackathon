import "./InvestPage.scss";

export const InvestPage = () => {
  return (
    <>
      <main className="InvestPage">
        <h1 className="InvestPage__heading">Investment Hub</h1>
        <section className="hero">
          <ul className="hero-list">
            <li className="hero-list__item">All</li>
            <li className="hero-list__item">US</li>
            <li className="hero-list__item">Eurpoe</li>
          </ul>
        </section>
      </main>
    </>
  );
};
