import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import {useState} from "react";



const NewExpense = (props) => {
    const [hideForm, setHideForm] = useState(false)
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
             const expenseData = {
                 ...enteredExpenseData,
                 id: Math.random().toString()
             }
        props.onAddExpense(expenseData )
    }

    // This Function is switch the state of the hideForm variable
    function handleClicked() {
        setHideForm(prevState => !prevState)
    }

    // This is rendering the Add New Expense button
    const addExpense = () => {
        return (
            <button onClick={handleClicked}>Add Expense</button>
        )
    }

    // This is rendering the ExpenseForm
    const expenseForm = () => {
        return (
            <ExpenseForm onCancel={handleClicked} onSaveExpenseData={onSaveExpenseDataHandler} />
        )
    }

    return (
        <div className={"new-expense"}>
            {hideForm ? expenseForm() : addExpense()}
        </div>
    )

}

export default NewExpense


// Uplifting State Explained (React) - https://www.youtube.com/watch?v=IYvD9oBCuJI