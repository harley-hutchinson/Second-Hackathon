// import { Link } from "react-router-dom";
import "./LandingPage.scss";
export const LandingPage = () => {
  return (
    <>
      <main className="landing">
        <section className="landing__top">
          <div>
            <p>THE COMPLETE WALLET</p>
            <p>
              Manage your <br />
              Finances
              <br />
              Effectively
            </p>
          </div>
        </section>
        <section className="landing__bottom">
          <div className="buttoms">
            <a href="google.com">Sign up</a>
            <a href="google.com">Login</a>
          </div>
        </section>
      </main>
    </>
  );
};
