import "./budget.css";
import React from "react";
import BudgetTotal from "./BudgetShow";
import Remaining from "./RemainingBudget";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
import { BudgetProvider } from "./contexts/budgetContext";

function Budget() {
  return (
    <BudgetProvider>
      <div className="budgetArea m-4">
        <h1 className="mt-3 budget-heading">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <BudgetTotal />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3 budget-sub-head">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3 budget-sub-head">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
}

export default Budget;
