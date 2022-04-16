import React, {useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { fetchMenus } from '../store/actionCreator';
import TableMenu from '../Components/TableMenu ';


function Home (){
  const navigate = useNavigate()
  const { menus} = useSelector((state) => state.menuReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus());
  }, []);

  
  const addMenu = () =>{
    navigate(`/addmenu`)
  }

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>MENU LIST</h2>
    <button onClick={() => {
            addMenu()
          }} className="nav-button" >
            <p className="table-button-text">
              Add New Menu
            </p>
          </button>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">NAMA</th>
          <th className="table-th">STATUS</th>
          <th className="table-th">ACTION</th>
         
        </tr>
        </thead>

    
        
   

      {menus.map((menu) =>(
                      <TableMenu  key={menu.id} menu={menu} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Home;
