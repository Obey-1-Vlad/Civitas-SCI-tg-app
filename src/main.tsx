// Should be imported first
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


// import App from './App.tsx'
import { ProjectPage } from './pages/ProjectPage.tsx'
import { ProjectsDashboard } from './pages/projects-dashboard/ProjectsDashboard.tsx'

import WebApp from '@twa-dev/sdk'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectsDashboard />,
  },
  {
    path: "projects/:projectId",
    element: <ProjectPage />
  },
], {basename: '/Civitas-SCI-tg-app/'});

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
