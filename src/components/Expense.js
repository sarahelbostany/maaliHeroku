import axios from 'axios'
import { useState, useContext } from 'react'
import { AppContext } from '../context/appContext'


//budget + amount spent + amount left
// budget needs to be tied to user
// function to take a
// functin to an array from amount spent and add
/// amount left diff function
// need to use .math







//adding an expense
const Expense = (props) => {
    const [newExpense, setNewExpense] = useState('')
    const [amount, setAmount] = useState([])
    const { userState, fetchUser } = useContext(AppContext)
    const [user, setUser] = userState


const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('e')
    const userId = localStorage.getItem('userId')
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/expenses/create`,{ userId:userId , expense: newExpense , amount:amount})
    .then((response) => {
        console.log(response)
    })

    .catch((error) => {
        console.log(error);
    })

}

    return(
        <div>
        <div className = "budgetfield">
            <span>Budget: {user.budget}</span>
            <span>Amount Left {user.total}</span>
            <span>Total Spent {user.budget - user.total}</span>


        </div>
        <div className = "addExpenseForm" >
            Add an Expense
        <form onSubmit= {handleSubmit}>
            <div>
                <label htmlFor="newExpense"></label>
                <input id="newExpense" value={newExpense} onChange={(e)=>{setNewExpense(e.target.value)}} placeholder="Enter New Expense"/>
                <label htmlFor="amount"></label>
                <input id="amount" type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter Amount"/>
            </div>

            <button className= "btn"> Add Expense</button>

        </form>

    </div>
    </div>
    )
}
export default Expense;
