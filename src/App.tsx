import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useParams
} from 'react-router-dom'
import { TonConnectUIProvider } from '@tonconnect/ui-react';

import { PROJECTS_IDS } from './constants.ts';

import { ProjectsDashboard } from './pages/projects-dashboard/ProjectsDashboard.tsx'
import { SpaceProjectPage } from './pages/space-project/SpaceProjectPage.tsx'
import { ComingSoon } from './pages/coming-soon/ComingSoon.tsx'
import { NotFound } from './pages/not-found/NotFound.tsx'

// Based on https://github.com/ton-community/tma-usdt-payments-demo/blob/master/src/components/Root.tsx

const ProjectRouter = () => {
  const { projectId } = useParams<{ projectId: string }>();

  switch (projectId) {
    case PROJECTS_IDS.SPACE_1:
      return <SpaceProjectPage />;
    case PROJECTS_IDS.INSURANCE:
      return <ComingSoon />;
    case PROJECTS_IDS.OTHER:
      return <ComingSoon />;
    default:
      return <NotFound />;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectsDashboard />,
  },
  {
    path: "projects/:projectId",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <ProjectRouter />
      </React.Suspense>
    ),
  },
], {basename: '/Civitas-SCI-tg-app/'});


export function App() {
  const manifestUrl = React.useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);


  return (
    <TonConnectUIProvider
      manifestUrl={manifestUrl}
      // actionsConfiguration={{ twaReturnUrl: 'https://t.me/tma_jetton_processing_bot/tma_jetton_processing' }}
    >
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  )
}
