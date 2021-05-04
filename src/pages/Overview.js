import axios from 'axios'
import Expense from '../components/Expense'
import { useState } from 'react'
import { useEffect} from'react'

const Overview = () => {


    const [expenseHistory, setExpenseHistory] = useState([])

    const pastTransactions = async () => {
       const userId =  localStorage.getItem('userId')
       console.log(userId, "userId")

       const expense = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/expenses/allexpenses/${userId}`)

       console.log(expense, 'expense test')
       setExpenseHistory(expense.data)

    }

    useEffect(() => {
        pastTransactions()

    }, [])

    return (
        <div>

        <Expense/>
        <br></br>

        <h4>Recent Expenses:</h4>

        {expenseHistory.map((expense,i) =>

        <div className = "history" >

            <p>{expense.expense}{ ' $' }
            {expense.amount}
            </p>


        </div>)}

       <div>


            </div>


        </div>
    )
}

export default Overview
