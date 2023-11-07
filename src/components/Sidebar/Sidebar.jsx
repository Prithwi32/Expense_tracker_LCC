import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Money Manager</h2>
      <div className="profileArea">
        <img src="" alt="no image" />
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

        <Link id="PofileBtn" className="nav" to={"/profile"}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
