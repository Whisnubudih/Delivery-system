import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useDispatch } from 'react-redux';
import { setRegisterWaiter } from '../store/actionCreator';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';

function RegisterWaiter () {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [registerWaiterForm, setRegisterWaiterForm] = useState({
        email: '',
        password: '',
        name: '',
      

        
  })

  const registerWaiterFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setRegisterWaiterForm({
      ...registerWaiterForm,
      [field]: value
    })
  }

  const toRegisterWaiter = () => {
    dispatch(setRegisterWaiter(registerWaiterForm))
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
        toRegisterWaiter()
       }} >
          <div className="input-add">
          <label className="label-name" >Name</label>
            <input className="input-name" name='name' value={registerWaiterForm.name} onChange={registerWaiterFormInput}  type="text" placeholder="Type Here"></input>

          <label className="label-name" >Email</label>
          <input className="input-name" name='email' value={registerWaiterForm.email} onChange={registerWaiterFormInput} type="email" placeholder="Type Here"></input>

            <label className="label-name" >Password</label>
            <input className="input-name" name='password' value={registerWaiterForm.password} onChange={registerWaiterFormInput}  type="password" placeholder="Type Here"></input>

          
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

  export default  RegisterWaiter ; 