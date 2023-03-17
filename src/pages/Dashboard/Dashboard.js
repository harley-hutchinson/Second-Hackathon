import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import BudgetModal from "../../components/BudgetModal/BudgetModal";
import MainNav from "../../components/MainNav/MainNav";
import MoneyCards from "../../components/MoneyCards/MoneyCards";
import "./Dashboard.scss";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [budget, setBudget] = useState("Set");

  const modalOpenHandler = () => setShowModal(true);
  const modalCloseHandler = () => setShowModal(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
    setBudget(`£${e.target.budget.value}`);
  };

  return (
    <>
      <main className="dashboard">
        <h1 className="dashboard__heading">Dashboard</h1>

        <section className="hero">
          <p className="hero__heading">Current Balance</p>
          <h2 className="hero__balance">£420,000</h2>
        </section>

        <MoneyCards modalOpenHandler={modalOpenHandler} budget={budget} />

        <BudgetModal
          show={showModal}
          modalCloseHandler={modalCloseHandler}
          submitHandler={submitHandler}
        />

        <nav className="options">
          <NavLink to="in" className="options__text">
            In
          </NavLink>
          <NavLink to="/" className="options__text">
            All
          </NavLink>
          <NavLink to="out" className="options__text">
            Out
          </NavLink>
        </nav>

        <Outlet />
      </main>
      <MainNav />
    </>
  );
};

export default Dashboard;
