// import { Link } from "react-router-dom";
import "./LandingPage.scss";
export const LandingPage = () => {
  return (
    <>
      <main className="landing">
        <section className="landing__top">
          <div className="landing__top__main-info">
            <h1>THE COMPLETE WALLET</h1>
            <h2>
              Manage your <br />
              Finances
              <br />
              Effectively
            </h2>
          </div>
        </section>
        <section className="landing__bottom">
          <div className="buttoms">
            <a className="buttom" href="google.com">
              Sign up
            </a>
            <a className="buttom" href="google.com">
              Login
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
