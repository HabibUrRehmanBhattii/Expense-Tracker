
import "./Expences.css";
import Card from "../../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";
import ExpenceseList from "../ExpenceseList/ExpenceseList";
import ExpenceChart from "../ExpenceChart/ExpenceChart";

export default function Expences(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    // Get the year from the ExpensesFilter component and set it to the state variable. This method called as uplifting the state.
    const selectedYearFilter = (year) => {
        setFilteredYear(year)
    }

    //Filtering the Data by years
    const filteredExpences = props.expensesData.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    //Rendering the data
    return (
        <Card className={"expenses"} >
            <ExpensesFilter onYearFilter={selectedYearFilter} selected={filteredYear} />
            <ExpenceChart expense={filteredExpences} />
            <ExpenceseList items={filteredExpences} />
        </Card>
    )
}