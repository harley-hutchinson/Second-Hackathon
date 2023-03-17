import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
        <MainNav />
      </BrowserRouter>
    </div>
  );
};

export default App;
