import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route,Navigate } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import JokesMain from './components/Jokes/JokesHomePage.jsx';
import CatListing from './components/Cat_Listing/CatListing.jsx';



const router  = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Navigate to="/random-user" />} />
        <Route path="/random-user" element={<App />} />
        <Route path="/random-jokes" element={<JokesMain />} />
        <Route path="/cats-listing" element={<CatListing />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </>
    )
  )
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>  
   
)
