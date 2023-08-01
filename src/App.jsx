import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DeliveriesPage from './deliveries/deliveriesPage'

function App() {

  return (
    <Routes>
      <Route path='/' element= {<DeliveriesPage />} />
      
    </Routes>
  )
}

export default App
