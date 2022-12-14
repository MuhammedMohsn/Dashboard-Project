import React, { Fragment,useState } from 'react'
import './App.css'
import darkContext from './darkContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Users from './Pages/Users'
import SingleUser from './Pages/SingleUser'
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
              <Route path=":userId" element={<SingleUser />} />
              <Route path="new" element={<New  title="Add new User"/>} />
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
