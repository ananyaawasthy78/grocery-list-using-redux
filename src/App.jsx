import { useState } from 'react'

import './App.css'
import Addgrocery from './components/addgrocery'
import Groceries from './components/groceries'


function App() {
  
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-zinc-900 text-white">
     <h1> Grocery List </h1>
     <Addgrocery />
     <Groceries />

    </div>
  )
}

export default App
