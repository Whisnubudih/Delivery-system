import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {menuDeleteSucces} from '../store/actionCreator'

function TableMenu ({menu}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

const deleteMenuHandler = (id) =>{
  console.log(id)
    fetch(`https://delivery-system-server.herokuapp.com/menu/${id}`, {
        method: 'DELETE',  
        headers: {
          access_token: localStorage.getItem('access_token')
        }, 
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success delete');
        dispatch(menuDeleteSucces(id))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
const editMenuHandler = (id) =>{
  navigate(`/editmenu/${id}`)
}
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{menu.name}</td>
        <td  className="table-td">{menu.status}</td>
     
       
        
        <td className="table-td1">
          <button onClick={() => {
           editMenuHandler(menu.id)
          }} className="table-button1" >
            <p className="table-button-text">
              Edit
            </p>
          </button>
          <button onClick={() => {
            deleteMenuHandler(menu.id)
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

  export default  TableMenu;  