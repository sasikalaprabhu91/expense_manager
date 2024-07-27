import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function History() {
  const [view, setview] = useState([])
  let border = "2px"
  let api="https://665584533c1d3b602939d669.mockapi.io/developer/react"
  let img1="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" 

  useEffect(() => {
    axios.get(api).then((s) => {
      setview(s.data)
    }).catch(err => console.log(err))
  },[api])

  function remove(id){
    axios.delete(`${api}/${id}`).then(()=>{
      alert("Data deleted")
      axios.get(api).then((s)=>{
        setview(s.data)
      })
    }).catch(err=>console.log(err))
  }
  return (
    <div id="historyall">
      <h1>History</h1>
      <table border={border}className='table table-responsive table-hover '>
        <thead>
        <tr>
         
          <th>TITLE</th>
          <th>AMOUNT</th>
          <th>TYPE</th>
          <th></th>
        </tr>
        </thead>

      
        <tbody>
        {view.map((item) => (
         
          <tr>
           
            <td>
              {item.title}
            </td>
            <td>
              {item.amount}
            </td>
            <td>
              {item.type}
            </td>
            <td>
             <img src={img1} alt="" srcset=""style={{height:20,width:20}} onClick={()=>remove(item.id)}/>
            </td>
            
          </tr>
         
        ))}

        </tbody>
      </table>

    </div>
  )
}
