import { Link } from "react-router-dom";
import "./MainNav.scss";
import iconHome from "../../assets/icons/Home.svg";
import iconEdu from "../../assets/icons/Book.svg";
import iconAdd from "../../assets/icons/Add-1.svg";
import iconInvest from "../../assets/icons/Chart-1.svg";
import iconProfile from "../../assets/icons/user.svg";

const MainNav = () => {
  return (
    <nav className="main-nav">
      <Link to="#" className="main-nav__link main-nav__link--selected">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.5 41"
          className="main-nav__icon main-nav__icon--selected"
        >
          <path
            id="Home"
            class="cls-1"
            d="M386.694,1171.71l-18.771-16a2.981,2.981,0,0,0-3.862,0l-18.771,16a3.007,3.007,0,0,0,1.795,5.29v15.99a3.006,3.006,0,0,0,2.985,3.01h31.844a3.006,3.006,0,0,0,2.985-3.01V1177A3.007,3.007,0,0,0,386.694,1171.71ZM365,1193h-1.99v-9h5.97v9H365Zm16.917-19v19h-9.951v-9a2.991,2.991,0,0,0-2.986-3h-5.97a2.991,2.991,0,0,0-2.986,3v9H350.07v-19h-2.849l18.771-16,18.771,16h-2.849Z"
            transform="translate(-344.25 -1155)"
          />
        </svg>
        Home
      </Link>
      <Link to="#" className="main-nav__link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 44"
          className="main-nav__icon"
        >
          <path
            d="M357,3112l-7,7v32a5,5,0,0,0,5,5h21a7.82,7.82,0,0,0,3-1s7-5,7-8v-35H357Zm26,3v31c0,1.26-2,3-2,3v-33H357.312a2.216,2.216,0,0,1,1.849-1H383Zm-16,4h4v8.88l-2-1.88-2,2v-9Zm-12,34a2,2,0,0,1-2-2v-30a2,2,0,0,1,2-2h9v15l5-4,5,4v-15h4v32a2,2,0,0,1-2,2H355Z"
            transform="translate(-350 -3112)"
          />
        </svg>
        Learn
      </Link>
      <Link to="#" className="main-nav__link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44 44"
          className="main-nav__icon"
        >
          <path
            d="M453,1243a22,22,0,1,0,22,22A22.025,22.025,0,0,0,453,1243Zm0,41a19,19,0,1,1,19-19A19,19,0,0,1,453,1284Zm8-20h-6v-6a1.5,1.5,0,0,0-3,0v6h-6a1.5,1.5,0,0,0,0,3h6v6a1.5,1.5,0,0,0,3,0v-6h6A1.5,1.5,0,0,0,461,1264Z"
            transform="translate(-431 -1243)"
          />
        </svg>
        Add
      </Link>
      <Link to="#" className="main-nav__link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.031 41.19"
          className="main-nav__icon"
        >
          <path
            d="M209.913,2605.01L210,2580c0-1.01-.481-1.99-1.314-1.99a6.973,6.973,0,0,0-5.939,3.86c-1.059,2.01-1.767,3.15-3.981,3.15-1.65,0-2.157-1.02-3.086-3.74-0.918-2.69-2.176-6.37-6.844-6.37-0.111,0-.21.01-0.317,0.02a1.078,1.078,0,0,0-.179-0.02,1.414,1.414,0,0,0-.359.05c-5.182.5-6.421,5.51-7.513,9.98a30.049,30.049,0,0,1-1.9,5.98,7.32,7.32,0,0,1-.879,1.38,1.487,1.487,0,0,0-.646.72,8.562,8.562,0,0,1-6.079,2.18v-27.88a1.49,1.49,0,1,0-2.979,0l0.031,38.18a1.5,1.5,0,0,0,1.5,1.5H208.9C209.739,2607,210.221,2605.28,209.913,2605.01ZM207,2582v22h-7l-0.241-16.01C205.549,2587.29,204.588,2583.35,207,2582Zm-14.134.27c0.673,1.97,1.768,4.81,4.134,5.73l-0.057,16h-6.982L190,2578C191.635,2578.4,192.067,2579.93,192.866,2582.27Zm-11.634,10.01a32.466,32.466,0,0,0,2.126-6.61c0.93-3.8,1.8-6.71,3.642-7.67l-0.032,26h-6.982l-0.087-9.66A10.582,10.582,0,0,0,181.232,2592.28Zm-10.269,5.97h0.189a12.2,12.2,0,0,0,5.769-1.45l0.072,7.2h-5.985Z"
            transform="translate(-167.969 -2565.81)"
          />
        </svg>
        Invest
      </Link>
      <Link to="#" className="main-nav__link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.62 24"
          className="main-nav__icon"
        >
          <path
            d="M1374.83,312c-0.51-4.347-2.32-8-6.83-8s-6.32,3.653-6.83,8h-1.99c0.65-5.425,3.21-10,8.82-10s8.17,4.575,8.82,10h-1.99ZM1368,300a6,6,0,1,1,6-6A6,6,0,0,1,1368,300Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,1368,290Z"
            transform="translate(-1359.19 -288)"
          />
        </svg>
        Profile
      </Link>
    </nav>
  );
};

export default MainNav;
