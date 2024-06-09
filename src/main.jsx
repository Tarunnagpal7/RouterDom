import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github from './Components/Github/Github.jsx'
import { githubLoaderInfo } from './Components/Github/GithubLoaderInfo.js'
import User from './Components/User/User.jsx'

const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path ='/' element = {<Layout/>}>
              <Route path='' element={<Home />} ></Route>
              <Route path='/about' element={<About />} ></Route>
              <Route path='/contact' element={<Contact />} ></Route>
              <Route path='user/:userid' element={<User />} ></Route>
              <Route  
              loader={githubLoaderInfo}
              path='/github' element={<Github />} ></Route>
        </Route>
      )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
