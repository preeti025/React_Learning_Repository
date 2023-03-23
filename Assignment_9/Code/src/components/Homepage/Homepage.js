import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export const Homepage = () => {
    const auth= useSelector(state => state.auth.login);
    console.log(auth);
  return (
    <>
        <Header />
        {!auth && <Login />}
        {auth && <Outlet/>}
        <Footer/>
    </>
  )
}
