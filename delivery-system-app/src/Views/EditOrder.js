import  { useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import {fetchOrderId} from '../store/actionCreator';
import { fetchMenus } from '../store/actionCreator';


function EditOrder() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { menus} = useSelector((state) => state.menuReducer);
 
  
  useEffect(() => {
    dispatch(fetchMenus());
  }, []);
    
    const [editOrderForm, setEditOrderForm] = useState({
      name: '',
        date: '',
        status: '',
        noTable: '',
        noOrder:'',
        MenuId:''
      

  })

  const changeEditOrderInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setEditOrderForm({
      ...editOrderForm,
      [field]: value
    })
  }
  const {id} = useParams()
  const { orderId, productsLoading, productsError } = useSelector((state) => state.orderReducer);
  
     useEffect(() =>{
    dispatch(fetchOrderId(id))
    },[])

    const EditNewOrder = () =>{
        fetch(`http://localhost:10000/order/${id}`, {
            method: 'PUT', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
           access_token: localStorage.getItem('access_token')
         },
         body: JSON.stringify(editOrderForm),
       })
       .then(response => response.json())
       .then(data => {
         console.log('Success:', data);
         setEditOrderForm(orderId)
 
         navigate('/order')
       })
       .catch((error) => {
           console.error('Error:', error);
         });
     }
     
     useEffect(() => {
      setEditOrderForm(orderId)
     },[orderId])
  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> EDIT ORDER</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        EditNewOrder()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">ORDER NAME</label>
              <input className="input-name"  name='name' value={editOrderForm.name} onChange={changeEditOrderInput} type="text"/>
              <label className="label-name" htmlFor="">DATE</label>
                <input className="input-name" type="date" name='date' value={editOrderForm.date} onChange={changeEditOrderInput} placeholder="Type Here"></input>

              
                <label className="label-name" htmlFor="">STATUS</label>
                <input className="input-name" type="text" name='status' value={editOrderForm.status} onChange={changeEditOrderInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">NOMOR TABLE</label>
                <input className="input-name" type="text" name='noTable' value={editOrderForm.noTable} onChange={changeEditOrderInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">NOMOR ORDER</label>
                <input className="input-name" type="text" name='noOrder' value={editOrderForm.noOrder} onChange={changeEditOrderInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">MENU</label>
                <input className="input-name" type="text" name='MenuId' value={editOrderForm.MenuId} onChange={changeEditOrderInput} placeholder="Type Here"></input>

                <select className="input-name"  value={editOrderForm.MenuId} name="MenuId" onChange={changeEditOrderInput} placeholder="What is genre?">
              <option >Choose your Menu</option>
             
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

export default EditOrder; 