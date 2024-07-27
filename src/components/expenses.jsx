import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Expenses() {
  let image1 = "https://assets.ccbp.in/frontend/react-js/money-manager/money-manager-bg.png"
  let a = [{
    image: "https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png ",
    content: "Your balance",
    
  },
  {
    image: "https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png ",
    content: "Your income",
   
  },
  {
    image: "https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png",
    content: "Your expenses",
    
  }]

 let api="https://665584533c1d3b602939d669.mockapi.io/developer/react"

 let[view,setview]=useState([])


 useEffect(()=>{
  axios.get(api).then((s)=>{
    setview(s.data)
  })
 },[api])


 let totalexpenses=0
 let totalincome=0

 view.forEach(item=>{
if(item.type==="expenses"){
  totalexpenses=totalexpenses+parseFloat(item.amount)
}
else if(item.type==="income"){
  totalincome=totalincome+parseFloat(item.amount)
}
else{
  throw new Error(alert("no more options"))
}

 })
 

 let totalbalance=totalincome-totalexpenses
  return (

    <div id='expenseall'>
      <div id="name">
        <img src={image1} alt="" />  <h1>Hi,user <p>Welcome back to  your <span>money manager</span></p></h1> </div>
      
<div id="row">
        <div className="expense-item">
          <img src={a[0].image} alt="balance" />
          <div id="price">
            <p>{a[0].content}</p>
            <p>{a[0].price}</p>
            <p>{totalbalance}</p>
          </div>
        </div>
      
     

        <div className="expense-item">
          <img src={a[1].image} alt="balance" />
          <div id="price">
            <p>{a[1].content}</p>
            <p>{a[1].price}</p>
            <p>{totalincome}</p>
          </div>
        </div>
     

      

        <div className="expense-item">
          <img src={a[2].image} alt="balance" />
          <div id="price">
            <p>{a[2].content}</p>
            <p>{a[2].price}</p>
            <p>{totalexpenses}</p>
          </div>
        </div>

        </div>
    </div>



  )
}
