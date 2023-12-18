import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from "./page/Login"
import Form from "./page/Form"
import Logout from './page/Logout';
function App() {
  return (
    <div>
<Routes>


<Route path="/" element={<Home />} />
<Route path="/form" element={<Form />} />
<Route path="/login" element={<Login />} />
<Route path="/logout" element={<Logout />} />
</Routes>
    </div>
  )
}

export default App