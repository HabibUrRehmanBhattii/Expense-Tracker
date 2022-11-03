import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenceseList.css"
import {nanoid} from "nanoid";

const ExpencesList = (props) => {
    if(props.items.length === 0) {
        return <h3 className={"expenses-list__fallback"} >Noting to show!</h3>
    }

    return (
        <ul className={"expenses-list"}>
            { props.items.map(expense => {
                return (
                    <ExpenseItem
                        key={nanoid()}
                        name={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />

                )
            })}
        </ul>
    )

}

export default ExpencesList