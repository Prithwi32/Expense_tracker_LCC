import "./dashboard.css";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  AreaChart,
  Area,
} from "recharts";
import { FcBusinessman } from "react-icons/fc";

const Dashboard = () => {
  const data = [
    {
      name: "January",
      Expense: -4000,
      Income: 2400,
    },
    {
      name: "February",
      Expense: -3000,
      Income: 1398,
    },
    {
      name: "March",
      Expense: -2000,
      Income: 7800,
    },
    {
      name: "April",
      Expense: -2780,
      Income: 3908,
    },
    {
      name: "May",
      Expense: -1890,
      Income: 4800,
    },
    {
      name: "June",
      Expense: -2390,
      Income: 3800,
    },
    {
      name: "July",
      Expense: -3490,
      Income: 4300,
    },
    {
      name: "August",
      Expense: -2490,
      Income: 1300,
    },
    {
      name: "September",
      Expense: -1040,
      Income: 4300,
    },
    {
      name: "October",
      Expense: -5490,
      Income: 2300,
    },
    {
      name: "November",
      Expense: -1490,
      Income: 6300,
    },
    {
      name: "December",
      Expense: -3490,
      Income: 4300,
    },
  ];
  const data02 = [
    {
      name: "January",
      Expense: 4000,
      Income: 2400,
      fill: "#0088FE",
    },
    {
      name: "February",
      Expense: 3000,
      Income: 1398,
      fill: "#ebb434",
    },
    {
      name: "March",
      Expense: 2000,
      Income: 7800,
      fill: "#d2eb34",
    },
    {
      name: "April",
      Expense: 2780,
      Income: 3908,
      fill: "#7edea9",
    },
    {
      name: "May",
      Expense: 1890,
      Income: 4800,
      fill: "#72ccd6",
    },
    {
      name: "June",
      Expense: 2390,
      Income: 3800,
      fill: "#7286d6",
    },
    {
      name: "July",
      Expense: 3490,
      Income: 4300,
      fill: "#c67ede",
    },
    {
      name: "August",
      Expense: 2490,
      Income: 1300,
      fill: "#ed9de0",
    },
    {
      name: "September",
      Expense: 1040,
      Income: 4300,
      fill: "#ede89d",
    },
    {
      name: "October",
      Expense: 5490,
      Income: 2300,
      fill: "#FF8042",
    },
    {
      name: "November",
      Expense: 1490,
      Income: 6300,
      fill: "#FFBB28",
    },
    {
      name: "December",
      Expense: 3490,
      Income: 4300,
      fill: "#00C49F",
    },
  ];
  return (
    <div className="dashboard">
      <div className="head m-primary">
        <div className="heading">
          <h1 id="dashboardHeading">Dashboard</h1>
        </div>
        <button className="newTrans-btn">+ New Transaction</button>
      </div>

      <div className="dashboardInfo ">
        <div className="bar-overview-latest">
          <div className="bar-overview">
            <div className="overview ">
              <div className="income overviewInfo">
                <h2 className="overviewHeading">$ 400.00</h2>
                <p className="overviewPara">Income</p>
              </div>
              <div className="expenses overviewInfo">
                <h2 className="overviewHeading">$ 200.00</h2>
                <p className="overviewPara">Expenses</p>
              </div>
              <div className="balance overviewInfo">
                <h2 className="overviewHeading">$ 200.00</h2>
                <p className="overviewPara">Balance</p>
              </div>
              <div className="totalT overviewInfo">
                <h2 className="overviewHeading">142</h2>
                <p className="overviewPara">Total Transactions</p>
              </div>
            </div>
            <div className="barChart m-primary">
              {/* <h3 className="m-secondary">Monthwise expenses and income</h3> */}
              <ResponsiveContainer>
                <BarChart
                  data={data}
                  width="100%"
                  height={200}
                  barGap="-20%"
                  barCategoryGap="39%"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis padding={{ left: 100, right: 100 }} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Income"
                    fill="var(--primary-color)"
                    radius={10}
                  />
                  <Bar
                    dataKey="Expense"
                    fill="var(--secondary-color)"
                    radius={10}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="latestTransactions-section">
            <h3 id="latestTrans-heading">Latest Transactions</h3>
            <div className="latestTransactions">
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
              <div className="trans">
                <div className="transactionInfo">
                  <FcBusinessman size="2.3vw" className="transactionIcon" />
                  <div className="nameAndTime">
                    <h4 className="transaction-name">Arun</h4>
                    <div className="transactionTime">10:00 A.M., 20th Jan</div>
                  </div>
                </div>
                <div className="transactionAmt">$3000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="graphs">
          <div className="pieChart">
            <div id="pieChart1">
              <h5 className="pieHeading">Monthly Income</h5>
              <PieChart width={220} height={190}>
                <Pie
                  data={data02}
                  dataKey="Income"
                  // nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={80}

                  // label
                />
              </PieChart>
            </div>
            <div id="pieChart2">
              <h5 className="pieHeading">Monthly Income</h5>
              <PieChart width={220} height={190}>
                <Pie
                  data={data02}
                  dataKey="Expense"
                  // nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={80}

                  // label
                />
              </PieChart>
            </div>
            <div id="pieChart3">
              <h5 className="pieHeading">Monthly Income</h5>
              <PieChart width={220} height={190}>
                <Pie
                  data={data02}
                  dataKey="Expense"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={80}
                  // label
                />
              </PieChart>
            </div>
          </div>
          <div className="areaGraph">
            <ResponsiveContainer>
              <AreaChart
                // height="12vw"
                data={data02}
                margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Income"
                  stroke="var(--primary-color)"
                  fillOpacity={1}
                  fill="#5d88ff35"
                />
                <Area
                  type="monotone"
                  dataKey="Expense"
                  stroke="var(--secondary-color)"
                  fillOpacity={1}
                  fill=" #49bfff35"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
