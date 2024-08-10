import { Outlet, createBrowserRouter } from "react-router-dom";

// const App = lazy(() => import("App"));
// const MainLayout = lazy(() => import("layouts/main-layout"));
// const Home = lazy(() => import("pages/Home"));
// const Page404 = lazy(() => import("pages/Page404"));

import App from "App";
import MainLayout from "layouts/main-layout";

import Home from "pages/Home";
import Page404 from "pages/Page404";

export const routes = [
  {
    element: (
      // <Suspense fallback={<Splash />}>
      <App />
      // </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <MainLayout>
            {/* <Suspense fallback={<PageLoader />}> */}
            <Outlet />
            {/* </Suspense> */}
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            // path: paths.starter,
            // element: <Starter />,
          },
        ],
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
