import "./sidebar.css";
import { Link } from "react-router-dom";
import { FcCurrencyExchange } from "react-icons/fc";
import profile from "../../assets/profile.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="websiteNameAndLogo">
        <FcCurrencyExchange size="3vw" />
        <h2 id="appName">Money Manager</h2>
      </div>
      <div className="profileArea">
        <img src={profile} alt="" />
      </div>
      <div className="navButtons">
        <Link id="dashboardBtn" className="nav" to={"/dashboard"}>
          Dashboard
        </Link>

        <Link id="categoriesBtn" className="nav" to={"/categories"}>
          Categories
        </Link>

        <Link id="budgetBtn" className="nav" to={"/budget"}>
          Budget
        </Link>

        <Link id="transactionsBtn" className="nav" to={"/transactions"}>
          Transactions
        </Link>

        <Link id="ProfileBtn" className="nav" to={"/profile"}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
