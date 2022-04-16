import React, {useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { fetchOrders } from '../store/actionCreator';

import TableOrder from '../Components/TableOrder';


function Order (){
  const navigate = useNavigate()
  const { orders} = useSelector((state) => state.orderReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  
  const addOrder= () =>{
    navigate(`/addorder`)
  }

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>ORDER LIST</h2>
    <button onClick={() => {
            addOrder()
          }} className="nav-button" >
            <p className="table-button-text">
              Add New Order
            </p>
          </button>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">Nama</th>
          <th className="table-th">DATE</th>
          <th className="table-th">NO TABLE</th>
          <th className="table-th">NO ORDER</th>
          <th className="table-th">STATUS</th>
          <th className="table-th">MENU</th>
          <th className="table-th">ACTION</th>
        </tr>
        </thead>

    
        
   

      {orders.map((order) =>(
                      <TableOrder  key={order.id} order={order} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Order;
