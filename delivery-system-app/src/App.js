import './App.css'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectRoute';

import Login from './Views/Login.js'
import Register from './Views/Register';
import Home from './Views/Home'
import AddMenu from './Views/AddMenu';
import EditMenu from './Views/EditMenu';
import Order from './Views/Order';
import AddOrder from './Views/AddOrder';
import RegisterWaiter from './Views/RegisterWaiter';
import EditOrder from './Views/EditOrder';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerwaiter" element={<RegisterWaiter />} />
      
        <Route path="/addmenu" element={
          <ProtectedRoute>
            <AddMenu />
          </ProtectedRoute>
        } />
         <Route path="/editmenu/:id" element={
          <ProtectedRoute>
            <EditMenu />
          </ProtectedRoute>
        } />
        <Route path="/order" element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        } />
                <Route path="/addorder" element={
          <ProtectedRoute>
            <AddOrder />
          </ProtectedRoute>
        } />
         <Route path="/editorder/:id" element={
          <ProtectedRoute>
            <EditOrder />
          </ProtectedRoute>
        } />
      </Routes>

    </div>
  )
}

export default App;
