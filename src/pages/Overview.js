import axios from 'axios'
import Expense from '../components/Expense'
import { useState } from 'react'
import { useEffect} from'react'

const Overview = () => {


    const [expenseHistory, setExpenseHistory] = useState([])
    const [reload, setReload] = useState(false)

    const pastTransactions = async () => {
       const userId =  localStorage.getItem('userId')
       console.log(userId, "userId")

       const expense = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/expenses/allexpenses/${userId}`)

       console.log(expense, 'expense test')
       setExpenseHistory(expense.data)

    }

    const updateExpenses = (newExpense) => {
        console.log('new expense' , newExpense)
        pastTransactions()
        // setExpenseHistory([...expenseHistory, newExpense])
    }

    useEffect(() => {
        pastTransactions()

    }, [])


    return (
        <div>
        <h4>Maali Tracker</h4>

        <Expense updateExpenses={updateExpenses}/>
        <br></br>

        <h3>Recent Expenses:</h3>

        {expenseHistory.map((expense,i) =>

        <div className = "history" >

            <p>{expense.expense}</p><p>{ ' $' }
            {expense.amount}
            </p>


        </div>)}

       <div>


            </div>


        </div>
    )
}

export default Overview
