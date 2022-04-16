import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Navbar from '../Components/Navbar'
import { setLogin } from '../store/actionCreator';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',

  })

  const loginFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setLoginForm({
      ...loginForm,
      [field]: value
    })
  }

  

  const doLogin = () => {
    dispatch(setLogin(loginForm))
      .then(() => {
        successAlert('Welcome to DELIVERY APP');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Error: Bad Request') {
          errorAlert(err, 'Please input field data');
        } else {
          errorAlert(err, 'Invalid email/password');
        }
      });
  };

  return (
    <section>
      
        <Navbar />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> Login</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
       
        doLogin()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">EMAIL</label>
              <input className="input-name" name='email' value={loginForm.email} onChange={loginFormInput} type="text" placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">Password</label>
                <input className="input-name" name='password' value={loginForm.password} onChange={loginFormInput} type="password" placeholder="Type Here"></input>
              </div>
              <div className="form-button">

                  <button className="table-button1" type="submit"> <p className="table-button-text">
                    Save
                  </p> </button>
                </div>
          </form>
          <div className="container-image">
            <p> MAKE AKUN FOR WAITER <button className="table-button1">
    <Link to="/registerwaiter" className="table-button-text" >Sign Up</Link>
    </button></p>

    <p> MAKE AKUN FOR CHASIER <button className="table-button2">
    <Link to="/register" className="table-button-text" >Sign Up</Link>
    </button></p>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Login; 