import MoneyCards from "../../components/MoneyCards/MoneyCards";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <h1 className="dashboard__heading">Dashboard</h1>

      <section className="hero">
        <p className="hero__heading">Current Balance</p>
        <h2 className="hero__balance">£420,000</h2>
      </section>

      <MoneyCards />
    </main>
  );
};

export default Dashboard;
