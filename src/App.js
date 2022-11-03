import Expences from "./components/Expences/Expenses/Expences";
import expensesData from "./expensesData";
import NewExpense from "./components/NewExpenses/NewExpense";
import {useState} from "react";

const App = () => {
    const [expensesDatas, setExpensesDatas] = useState(expensesData);

    const addExpenseHandler = expense => {
        setExpensesDatas(prevState => {
            return [expense, ...prevState]
        })
    }

  return (
      <>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expences expensesData={expensesDatas} />
      </>
  )

}

export default App;

