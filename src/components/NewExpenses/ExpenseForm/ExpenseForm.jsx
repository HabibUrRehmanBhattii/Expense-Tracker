import "./ExpenseForm.css"
import { useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnterTitle] = useState(" ");
    const [enteredNumber, setEnterNumber] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    /*const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredNumber: "",
        enteredDate: "",
    });*/
    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value)
        /*setUserInput({
            ...userInput,
            enteredTitle: (event.target.value)
        })*/
        /*setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value }
        })*/
    }

    const numberChangeHandler = (event) => {
        setEnterNumber(event.target.value)
        console.log(enteredNumber)
    }

    const dateChangerHandler = (event) => {
        setEnteredDate(event.target.value)
        console.log(enteredDate)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredNumber,
            date: new Date(enteredDate)
        }
        setEnterTitle("")
        setEnteredDate("")
        setEnterNumber("")
        props.onSaveExpenseData(expenseData)
        props.onCancel()
    }


    return (
        <form onSubmit={submitHandler}>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        placeholder={"Title"}
                        value={enteredTitle}
                    />
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        min={"0.1"}
                        step={"0.01"}
                        onChange={numberChangeHandler}
                        placeholder={"0"}
                        value={enteredNumber}
                    />
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        min={"2019-01-1"}
                        max={"2022-12-31"}
                        onChange={dateChangerHandler}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"button"} onClick={props.onCancel}>Cancel</button>
                <button type={"submit"} >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm