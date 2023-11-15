import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetContext } from "./contexts/budgetContext";

function ExpenseList() {
  const { expenses } = useContext(BudgetContext);

  // const expenses = [
  //   { id: 1231232, name: "Shopping", cost: 50 },
  //   { id: 1231232, name: "Holiday", cost: 300 },
  //   { id: 1231232, name: "Transportation", cost: 70 },
  //   { id: 1231232, name: "Fuel", cost: 40 },
  //   { id: 1231232, name: "ChildCare", cost: 500 },
  // ];

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setFilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setFilteredExpenses(searchResults);
	};

  return (
    <>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul className="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
}

export default ExpenseList;
