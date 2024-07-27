import React, { useState } from 'react'
import axios from 'axios'

export default function Form() {
  const[title,settitle]=useState(null)
  const[amount,setamount]=useState(null)
  const[type,settype]=useState(null)
  let api="https://665584533c1d3b602939d669.mockapi.io/developer/react"
   
function add(e){

         e.preventDefault();
         axios.post(api,{title,amount,type}).then(()=>{
          alert("data saved")
          settitle("" )
            setamount("")

         
         }).catch((err)=>{
          console.log(err);
         })
}

  return (
    <div id="form1">
        <form action=""onSubmit={add}>
            <h1>Add transaction</h1>
            <label htmlFor=""placeholder="TITLE"class="form-label p-1">TITLE</label>
            <input type="text" class="form-control"onChange={(e)=>settitle(e.target.value)}value={title}/>
            <label htmlFor=""class="form-label p-1" placeholder="AMOUNT" >AMOUNT</label>
            <input type="number" class="form-control"value={amount} onChange={(e)=>setamount(e.target.value)}/>
            <label htmlFor=""class="form-label p-1">TYPE</label><br />
            <select name="" id=""class="form-select "value={type} onChange={(e)=>settype(e.target.value)}>
              <option >--select one option--</option>
                <option value="income">Income</option>
                <option value="expenses">Expenses</option>
            </select> <br /> <br />
            <input type="submit" value="Add"class="btn btn-primary "/>
        </form>
    </div>
  )
}
