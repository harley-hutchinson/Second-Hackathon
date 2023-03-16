const MainNav = () => {
  return (
    <nav className="main-nav">
      <Link to="#" className="main-nav__link main-nav__link--dashboard">
        Dashboard
      </Link>
      <Link to="#" className="main-nav__link main-nav__link--education">
        Education
      </Link>
      <Link to="#" className="main-nav__link main-nav__link--add">
        Add
      </Link>
      <Link to="#" className="main-nav__link main-nav__link--invest">
        Investments
      </Link>
      <Link to="#" className="main-nav__link main-nav__link--profile">
        Profile
      </Link>
    </nav>
  );
};

export default MainNav;
