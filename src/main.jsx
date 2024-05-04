import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/content/Home.jsx'
import About from './component/content/About.jsx'
import Project from './component/content/Project.jsx'
import Skill from './component/content/Skill.jsx'
import App from './App.jsx'
import { Contact } from './component/content/Contect.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route  path='/' element={<App />}>
    <Route path='' element={<Home />}/>
    <Route path='About' element={<About />}/>
    <Route path='Skill' element={<Skill />}/>
    <Route path='Project' element={<Project />}/>
    <Route path='Contact' element={<Contact />}/>

  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider  router={router}/>
  </React.StrictMode>,
)
