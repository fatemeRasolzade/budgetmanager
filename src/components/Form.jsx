import React, { useState } from 'react'
import { connect } from 'react-redux';
import { v4 as uuidv4 }  from 'uuid'
import { AddCost } from '../Redux/Action/listAction'

const Form = ({AddCost}) => {

    const [form,setForm] = useState({
      id: uuidv4(),
      value: "",
      isIncome: true
    });

    const OnChange = (name , value)=>{
        setForm({
          ...form ,
          [name] : value
        })
    }

    const OnSubmit = (e)=>{
      e.preventDefault()
        if(!(form.value.trim() === "" || isNaN(form.value))){
          AddCost(form);
          setForm({
           id: uuidv4(),
           value: "",
           isIncome: true
          })

        }
        else{
          alert("please enter integer number");
        }
    }

    return (
        <div class="container d-flex justify-content-center my-5">
        <form onSubmit={OnSubmit}>
            <div class="d-flex align-items-baseline">
              <input
                class="cost-input"
                type="text"
                onChange={(e)=>OnChange('value' , e.target.value)}
                placeholder="Enter cost"
                value={form.value}
              />
            <div class="btn-group">
                <button type="button" class="btn dropdown-toggle dropdown" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                  {form.isIncome ? "Income" : "Expense"}
                </button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                  <li onClick={()=>OnChange('isIncome' , true)}><button  class="dropdown-item" type="button">Income</button></li>
                  <li onClick={()=>OnChange('isIncome' , false)}><button class="dropdown-item" type="button">Expense</button></li>
                </ul>
              </div>
              <button
                class="dropdown"
                type="submit"
                onClick={OnSubmit}
              >
                Add
              </button>
            </div>
        </form>
    </div>
    )
}

export default connect(null,{AddCost})(Form)

