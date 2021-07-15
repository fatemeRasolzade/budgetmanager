import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { DeleteCost, EditCost } from '../Redux/Action/listAction';


const Item = ({cost , index , DeleteCost, EditCost}) => {

    const [isEditing,setIsEditing] = useState(false);

    const [form,setForm] = useState({
        id: cost.id,
        value: cost.value,
        isIncome: cost.isIncome
      });
  
      const OnChange = (name , value)=>{
          setForm({
            ...form ,
            [name] : value
          })
      }
  
    const OnSubmit = (e)=>{
        e.preventDefault();
        EditCost(index, form);
        setIsEditing(false);
    }

    const handleIsEditing = (e) => {
        e.stopPropagation();
        setIsEditing(!isEditing);
    }

    return (
        <div>
        {!isEditing ? 
            <li key={cost.id} className={(cost.isIncome ? "bg-primary" : "bg-danger") + " list-group-item text-white"}>
                {cost.value}
                <button onClick={() => DeleteCost(cost)}>X</button>
                <button onClick={handleIsEditing}>Edit</button>
            </li>
            :
            <form onSubmit={OnSubmit} className="bg-info">
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
                        Edit
                    </button>
                </div>
            </form>
            }
        </div>
    )
}

export default connect(null,{DeleteCost,EditCost})(Item)
