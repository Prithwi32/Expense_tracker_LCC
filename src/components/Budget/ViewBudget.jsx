import React from "react";

function ViewBudget(props) {
  return (
    <>
      <span className="me-5 displayResultHead">Budget: ₹{props.budget}</span>
      <button
        type="button"
        className="editStyle ms-5"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
}

export default ViewBudget;
