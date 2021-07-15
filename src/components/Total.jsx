import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const Total = ({list}) => {

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);

    const calcIncomes = ()=>{
        let inCome=0
        for(let li of list.list){
            if(li.isIncome){
                inCome += parseInt(li.value)
            }
        }
        return inCome
    }

    const calcExpenses = ()=>{
        let expense=0
        for(let li of list.list){
            if(!li.isIncome){
                expense += parseInt(li.value)
            }
        }
        return expense
    }

    return (
        <div class="container d-flex justify-content-center">
            <span>Total:{calcIncomes() - calcExpenses()}</span>
            <span>Income:{calcIncomes()}</span>
            <span>expensive:{calcExpenses()}</span>
        </div>
    )
}
const mapStateToProps = (state) => ({
    list: state.list
})

export default connect(mapStateToProps)(Total)

