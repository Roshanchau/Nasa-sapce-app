import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Nav from './Components/Nav'


const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Nav/>} >
                    <Route path='Login' element={<Login />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default MyRoute