import { createBrowserRouter } from "react-router-dom";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/mainLayout/main-layout";
import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exception";
import LoginPage from "./pages/login";
import CoursesPage from "./pages/courses";
import PrivateRoute from "./PrivateRoute";
import NewsPage from "./pages/news";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    // errorElement: <UnhandledException />,
    children: [
      {
        index: true,
        element: <CoursesPage />,
      },
      {
        path: "courses/:id",
        element: <></>,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
        errorElement: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
