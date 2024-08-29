import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../components/home/Home'
import User from '../components/user/user'

export default props =>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users' element={<User />} />
        <Route path='*' element={<Home />} />
    </Routes>
