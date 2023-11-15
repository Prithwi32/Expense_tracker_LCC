import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { BudgetContext } from "./contexts/budgetContext";

function ExpenseItem(props) {
  const { dispatch } = useContext(BudgetContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p className="expenseItemName">{props.name}</p>
      <span className="badge badgeStyle mr-3">₹{props.cost}</span>
      <TiDelete size="2.2em" onClick={handleDeleteExpense}></TiDelete>
    </li>
  );
}

export default ExpenseItem;
