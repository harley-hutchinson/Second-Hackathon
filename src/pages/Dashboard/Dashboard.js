import MoneyCards from "../../components/MoneyCards/MoneyCards";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <h1 className="dashboard__heading">Dashboard</h1>

      <section className="hero">
        <h2 className="hero__heading">Current Balance</h2>
        <p className="hero__balance">£420,000</p>
      </section>

      <MoneyCards />
    </main>
  );
};

export default Dashboard;
