import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LeaveRequestForm from './pages/LeaveRequestForm'
import LeaveRequestsAdmin from './pages/LeaveRequestAdmin'
import LeaveRequestsUser from './pages/LeaveRequestsUser'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
       
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<LeaveRequestsAdmin />} />
            <Route path='/leave-request' element={<LeaveRequestForm />} />
            <Route path='/myrequest' element={<LeaveRequestsUser />} />

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='*' element={<PageNotFound/>}/>

        </Routes>

        
    </>
  )
}

export default App