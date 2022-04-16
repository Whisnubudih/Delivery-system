import  { useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import {fetchMenutId} from '../store/actionCreator';


function EditMenu() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const [editMenuForm, setEditMenuForm] = useState({
       name:"",
       status:"",
      

  })

  const changeEditMenuInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setEditMenuForm({
      ...editMenuForm,
      [field]: value
    })
  }
  const {id} = useParams()
  const { menuId, productsLoading, productsError } = useSelector((state) => state.menuReducer);
  
     useEffect(() =>{
    dispatch(fetchMenutId(id))
    },[])

    const EditNewMenu = () =>{
        fetch(`http://localhost:10000/menu/${id}`, {
            method: 'PUT', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
           access_token: localStorage.getItem('access_token')
         },
         body: JSON.stringify(editMenuForm),
       })
       .then(response => response.json())
       .then(data => {
         console.log('Success:', data);
         setEditMenuForm(menuId)
 
         navigate('/')
       })
       .catch((error) => {
           console.error('Error:', error);
         });
     }
     
     useEffect(() => {
      setEditMenuForm(menuId)
     },[menuId])
  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> EDIT ITEM</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        EditNewMenu()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">ITEM NAME</label>
              <input className="input-name"  name='name' value={editMenuForm.name} onChange={changeEditMenuInput} type="text"/>

                <label className="label-name" htmlFor="">STATUS</label>
                <input className="input-name" name='status' value={editMenuForm.status} onChange={changeEditMenuInput} type="text"/>

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

export default EditMenu; 