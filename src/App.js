import "./App.scss";
import MainNav from "./components/MainNav/MainNav";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Dashboard />
      <MainNav />
    </div>
  );
};

export default App;
