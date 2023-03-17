import { NavLink, Outlet } from "react-router-dom";
import MainNav from "../../components/MainNav/MainNav";
import "./AddPage.scss";

const AddPage = () => {
  return (
    <>
      <main className="add">
        <h1 className="add__heading">Add</h1>
        <nav className="add-options">
          <NavLink to="in" className="add-options__text">
            In
          </NavLink>
          <NavLink to="out" className="add-options__text">
            Out
          </NavLink>
        </nav>

        <Outlet />
      </main>
      <MainNav active={"add"} />
    </>
  );
};

export default AddPage;
