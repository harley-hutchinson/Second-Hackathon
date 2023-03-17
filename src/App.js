import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardIn from "./pages/Dashboard/DashboardIn";
import DashboardOut from "./pages/Dashboard/DashboardOut";
import DashboardAll from "./pages/Dashboard/DashboardAll";
import AddPage from "./pages/AddPage/AddPage";
import AddPageIn from "./pages/AddPage/AddPageIn";
import AddPageOut from "./pages/AddPage/AddPageOut";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" element={<DashboardAll />} />
            <Route path="in" element={<DashboardIn />} />
            <Route path="out" element={<DashboardOut />} />
          </Route>
          <Route path="add" element={<AddPage />}>
            <Route path="in" element={<AddPageIn />} />
            <Route path="out" element={<AddPageOut />} />
          </Route>
          <Route path="landing-page" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
