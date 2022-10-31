import React, { Fragment,useState } from 'react'
import './App.css'
import darkContext from './darkContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Single from './Pages/Single'
import New from './Pages/New'
import './Dark.css'
function App() {
  let [dark,setDark]=useState("")
 return (
    <Fragment>
      <darkContext.Provider value={setDark}>
      <div className={dark?dark:""}>
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard-Project/">
            <Route index element={<Home/>} />
            <Route path="/Dashboard-Project/users">
              <Route index element={<Users />} />
              <Route path="/Dashboard-Project/:userId" element={<Single />} />
              <Route path="/Dashboard-Project/new" element={<New  title="Add new User"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      </darkContext.Provider>
    </Fragment>
  )
}

export default App
