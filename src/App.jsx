import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './pages/MainLayout'
import { Home } from './pages/main/Home'
import { BlogDetail } from './pages/main/BlogDetail'
import { Profile } from './pages/main/Profile'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'
import { About } from './pages/main/About'
import { Membership } from './pages/main/Membership'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index path='/' element={<Home />} replace />
        <Route path='blog' element={<BlogDetail />}/>
        <Route path='profile' element={<Profile />}/>
        <Route path='about' element={<About />} />
        <Route path='membership' element={<Membership />} />
      </Route>
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
  )
}

export default App
