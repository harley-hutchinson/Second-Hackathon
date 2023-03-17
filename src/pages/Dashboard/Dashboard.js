import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import BudgetModal from "../../components/BudgetModal/BudgetModal";
import MainNav from "../../components/MainNav/MainNav";
import MoneyCards from "../../components/MoneyCards/MoneyCards";
import { GET_ALL_TRANSACTIONS } from "../../utils/apiCalls.mjs";
import "./Dashboard.scss";
import warning from "../../assets/icons/Security announcement.svg";
import smiley from "../../assets/icons/Emotion.svg";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [budget, setBudget] = useState("Set");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState();

  const calcBalance = (transactions) => {
    let bal = 0;
    transactions.forEach((transaction) => {
      if (transaction.isIncome) {
        bal += Number(transaction.amount);
      } else {
        bal -= Number(transaction.amount);
      }
    });

    return bal;
  };

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data } = await GET_ALL_TRANSACTIONS();
        setTransactions(data);
        setBalance(calcBalance(data));
      } catch (error) {
        console.log(error);
      }
    };

    getTransactions();
  }, []);

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
          <div className="hero__text">
            <p className="hero__heading">Current Balance</p>
            <h2 className="hero__balance">
              {balance >= 0 ? "£" : "-£"}
              {Math.abs(balance)}
            </h2>
          </div>
          <img
            src={balance >= 0 ? smiley : warning}
            alt="emotion about balance"
            className="hero__emotion"
          />
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
