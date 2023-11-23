import React, { useState, useContext } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { BudgetContext } from "./contexts/budgetContext";

const BudgetShow = () => {
  const { budget, dispatch } = useContext(BudgetContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div class="alert result-bgColor d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        // For part 1 render component inline rather than create a separate one
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default BudgetShow;
