import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { addOrders } from '../store/actionCreator'
import { useSelector, useDispatch } from 'react-redux';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';
import { fetchMenus } from '../store/actionCreator';


function AddOrder() {
  const { menus} = useSelector((state) => state.menuReducer);
 
  
  useEffect(() => {
    dispatch(fetchMenus());
  }, []);

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [ordersForm, setOdersForm] = useState({
        name: '',
        date: '',
        noTable: '',
        noOrder:'',
        MenuId:''

  })
 
  const changeOrderFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setOdersForm({
      ...ordersForm,
      [field]: value
    })
  }

  const addNewOrder = () => {
    dispatch(addOrders(ordersForm))
    .then(() => {
      successAlert('Success add company');
      navigate('/order');
    })
    .catch((err) => {
      console.log(err);
      if (err === 'Error: Bad Request') {
        errorAlert(err, 'Please input field data');
      } else {
        errorAlert(err, 'PLeease fill the blank');
      }
    });
  };

  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> New Order</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        addNewOrder()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">ORDER NAME</label>
              <input className="input-name" name='name' value={ordersForm.name} onChange={changeOrderFormInput} type="text" placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">DATE</label>
                <input className="input-name" type="date" name='date' value={ordersForm.date} onChange={changeOrderFormInput} placeholder="Type Here"></input>


                <label className="label-name" htmlFor="">NOMOR TABLE</label>
                <input className="input-name" type="text" name='noTable' value={ordersForm.noTable} onChange={changeOrderFormInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">NOMOR ORDER</label>
                <input className="input-name" type="text" name='noOrder' value={ordersForm.noOrder} onChange={changeOrderFormInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">MENU</label>
             
             <select className="input-name"  value={ordersForm.MenuId} name="MenuId" onChange={changeOrderFormInput} placeholder="What is genre?">
             <option  >Choose your Menu</option>
             
             {menus.map((menu) =>(
                     
                     <option key={menu.id} value={menu.id} >{menu.name}</option>

                   ))}
              
               </select>
              </div>
              <div className="form-button">

                  <button className="table-button1" type="submit"> <p className="table-button-text">
                    Save
                  </p> </button>
                </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default AddOrder; 