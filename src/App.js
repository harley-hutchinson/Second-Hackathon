import "./App.scss";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Dashboard />
      <LandingPage />
    </div>
  );
};

export default App;
