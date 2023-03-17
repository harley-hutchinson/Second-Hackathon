import "./InvestPage.scss";
import { GET_US_STOCK } from "../../utils/apiCalls.mjs";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const InvestPage = () => {
  const [stockUs, setStockUs] = useState(null);

  useEffect(() => {
    const getUsStocks = async () => {
      try {
        const { data } = await GET_US_STOCK();
        setStockUs(data.splice(0, 99));
        console.log(stockUs);
      } catch (error) {
        console.log(error);
      }
    };

    getUsStocks();
  }, []);

  console.log(stockUs);

  // const usStocks = stockUs.map((stock) => {
  //   return <p>test</p>;
  // });

  return (
    <>
      <main className="invest-page">
        <h1 className="invest-page__heading">Investment Hub</h1>
        <section className="invest-page__hero">
          <nav className="invest-page__options">
            <ul className="invest-page__hero-list">
              <NavLink to="all" className="options__text">
                All
              </NavLink>
              <NavLink to="us" className="options__text">
                US
              </NavLink>
              <NavLink to="eurpoe" className="options__text">
                Eurpoe
              </NavLink>
            </ul>
          </nav>
        </section>
        <section>
          {stockUs &&
            stockUs.map((stock) => {
              return (
                <article className="invest-card" key={stock.symbol}>
                  <h4 className="invest-card__title">{stock.symbol}</h4>
                  <p>{stock.description}</p>
                </article>
              );
            })}
        </section>
      </main>
    </>
  );
};
