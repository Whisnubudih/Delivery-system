import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useDispatch } from 'react-redux';
import { setRegister } from '../store/actionCreator';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';

function Register () {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        name: '',
        

        
  })

  const registerFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setRegisterForm({
      ...registerForm,
      [field]: value
    })
  }

  const toRegister = () => {
    dispatch(setRegister(registerForm))
    .then(() => {
      successAlert('SUCCESS MAKE ACCOUNT');
      navigate('/login');
    })
    .catch((err) => {
      console.log(err);
      if (err === 'Error: Bad Request') {
        errorAlert(err, 'Please input field data');
      } else {
        errorAlert(err, 'PLEASE FILL THE BLANK');
      }
    });
  };

  return (
    <section>
      
    <Navbar />

 
  <div className="formUser">
    <div className="form">
      <div className="container-image">
        <h2> Register</h2>
      </div>
      <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        toRegister()
       }} >
          <div className="input-add">
          <label className="label-name" >Name</label>
            <input className="input-name" name='name' value={registerForm.name} onChange={registerFormInput}  type="text" placeholder="Type Here"></input>

          <label className="label-name" >Email</label>
          <input className="input-name" name='email' value={registerForm.email} onChange={registerFormInput} type="email" placeholder="Type Here"></input>

            <label className="label-name" >Password</label>
            <input className="input-name" name='password' value={registerForm.password} onChange={registerFormInput}  type="password" placeholder="Type Here"></input>

          
          </div>
          <div className="form-button">

              <button className="table-button1" type="submit"> <p className="table-button-text">
                Save
              </p> </button>

              
              <button className="table-button2" > <Link to="/login" className="table-button-text">
                Cancel
              </Link> </button>
            </div>
      </form>
    </div>
  </div>
</section>
    )
   
}

  export default  Register; 