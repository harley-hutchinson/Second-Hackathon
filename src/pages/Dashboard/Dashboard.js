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
  const [income, setIncome] = useState(0);
  const [out, setOut] = useState(0);

  const calcBalance = (transactions) => {
    let income = 0;
    let out = 0;
    transactions.forEach((transaction) => {
      if (transaction.isIncome) {
        income += Number(transaction.amount);
      } else {
        out += Number(transaction.amount);
      }
    });

    const bal = income - out;
    return [bal, income, out];
  };

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const { data } = await GET_ALL_TRANSACTIONS();
        setBalance(calcBalance(data)[0]);
        setIncome(calcBalance(data)[1]);
        setOut(calcBalance(data)[2]);
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
        <h2 className="dashboard__heading">Dashboard</h2>

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

        <MoneyCards
          modalOpenHandler={modalOpenHandler}
          budget={budget}
          income={income}
          out={out}
        />

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
