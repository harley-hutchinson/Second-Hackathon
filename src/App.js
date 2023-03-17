import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardIn from "./pages/Dashboard/DashboardIn";
import DashboardOut from "./pages/Dashboard/DashboardOut";
import DashboardAll from "./pages/Dashboard/DashboardAll";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<DashboardAll />} />
          <Route path="in" element={<DashboardIn />} />
          <Route path="out" element={<DashboardOut />} />
        </Route>
        <Route path="landing-page" element={<LandingPage />} />
      </Routes>
      <MainNav />
    </BrowserRouter>
  );
};

export default App;
