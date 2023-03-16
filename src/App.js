import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <MainNav />
      </BrowserRouter>
    </div>
  );
};

export default App;
