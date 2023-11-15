import React, { useContext } from "react";
import { BudgetContext } from "./contexts/budgetContext";

function ExpenseTotal() {
  const { expenses } = useContext(BudgetContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary p-4">
      <span className="displayResultHead">Spent so far: ₹{totalExpenses}</span>
    </div>
  );
}

export default ExpenseTotal;
