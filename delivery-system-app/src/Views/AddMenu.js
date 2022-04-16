import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { addMenus } from '../store/actionCreator'
import { useDispatch } from 'react-redux';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';


function AddMenu() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [menusForm, setMenusForm] = useState({
        name: '',
     
       

  })

  const changeMenuFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setMenusForm({
      ...menusForm,
      [field]: value
    })
  }

  const addNewMenus = () => {
    dispatch(addMenus(menusForm))
    .then(() => {
      successAlert('Success add new item');
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
      if (err == 'Error: Bad Request') {
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
            <h2> New MENU</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        addNewMenus()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">ITEM NAME</label>
              <input className="input-name" name='name' value={menusForm.name} onChange={changeMenuFormInput} type="text" placeholder="Type Here"></input>

              

              
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

export default AddMenu; 