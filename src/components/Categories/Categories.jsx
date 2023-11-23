import "./categories.css";
import { FcMenu, FcApproval } from "react-icons/fc";

const Categories = () => {
  return (
    <div className="category-page">
      <h1 id="pageHeading">Categories</h1>
      <div className="categories">
        <div className="incomeCategories cat">
          <h5 id="incomeCatHeading">Income Categories</h5>
          <div className="catList">
            <div className="incomeCat-item item">
              <p>
                <FcApproval size="1.8vw" />
                Salary
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="incomeCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Refunds
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="incomeCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Rental
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="incomeCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Sale
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="incomeCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Awards
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="incomeCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Grants
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="incomeCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Lottery
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <div className="expenseCategories cat">
          <h5 id="expenseCatHeading">Expense Categories</h5>
          <div className="catList">
            <div className="expenseCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Clothing
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="expenseCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Education
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="expenseCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Food
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="expenseCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Health
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="expenseCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Insurance
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>edit</li>
                  <li>edit</li>
                </ul>
              </details>
            </div>
            <div className="expenseCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Tax
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
            <div className="expenseCat-item item">
              <p>
                {" "}
                <FcApproval size="1.8vw" />
                Bills
              </p>
              <details>
                <summary>
                  <FcMenu />
                </summary>

                <ul>
                  <li>edit</li>
                  <li>delete</li>
                  <li>ignore</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div className="newCategory">
        <h5 className="newCatHeading">Add new Category</h5>
        <div className="categoryForm">
          <div className="categoryName">
            <span>Category Name : </span>
            <input type="text" name="" id="categoryName" />
          </div>
          <select name="" id="categoryOpt">
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <button className="createBtn">Create Category</button>
      </div>
    </div>
  );
};

export default Categories;
