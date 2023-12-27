import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from 'primereact/api'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>,
)
