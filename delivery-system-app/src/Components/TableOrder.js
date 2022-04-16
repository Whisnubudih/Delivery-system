import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {OrderDeleteSucces} from '../store/actionCreator'

function TableOrder ({order}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formatDate =() => {
   
    let timeData = new Date(order.date) 
    const timeDate = timeData.getDate()
    const timeMonth = timeData.getMonth() + 1
    const timeYear = timeData.getFullYear()
    return `${timeDate}-${timeMonth}-${timeYear}`
}

const formatNoOrder =() => {
   
  let timeData = new Date(order.date) 
  const timeDate = timeData.getDate()
  const timeMonth = timeData.getMonth() + 1
  const timeYear = timeData.getFullYear()
  return `ABC${timeDate}${timeMonth}${timeYear}-${order.noOrder}`
}




const deleteOrderHandler = (id) =>{
  console.log(id)
    fetch(`http://localhost:10000/order/${id}`, {
        method: 'DELETE',  
        headers: {
          access_token: localStorage.getItem('access_token')
        }, 
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success delete');
        dispatch(OrderDeleteSucces(id))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
const editOrderHandler = (id) =>{
  navigate(`/editorder/${id}`)
}
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{order.name}</td>
        <td  className="table-td">{formatDate()}</td>
        <td  className="table-td">{order.noTable}</td>
        <td  className="table-td">{formatNoOrder()}</td>
        <td  className="table-td">{order.status}</td>
        <td  className="table-td">{order.Menu.name}</td>
        
        
        <td className="table-td1">
          <button onClick={() => {
            editOrderHandler(order.id)
          }} className="table-button1" >
            <p className="table-button-text">
              Edit
            </p>
          </button>
          <button onClick={() => {
            deleteOrderHandler(order.id)
          }} className="table-button2" >
            <p className="table-button-text">
              Delete
            </p>
          </button>
          </td>
      </tr>
    </tbody>
  )
   
}

  export default  TableOrder ;  