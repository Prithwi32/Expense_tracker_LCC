import React, { useContext } from "react";
import { BudgetContext } from "./contexts/budgetContext";

function RemainingBudget() {
  const { expenses, budget } = useContext(BudgetContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span className="displayResultHead">Remaining: ₹{budget - totalExpenses}</span>
    </div>
  );
}

export default RemainingBudget;
