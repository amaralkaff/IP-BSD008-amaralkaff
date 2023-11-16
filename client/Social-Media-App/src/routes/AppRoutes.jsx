import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PostPage from "../pages/PostPage";
import NavBar from "../components/NavBar";
import CreateProfileForm from "../components/CreateProfileForm";
import ProfileEdit from "../components/ProfileEdit";
import TranslatorComponent from "../components/TranslatorComponent";

const AppRoutes = [
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      {
        path: "/create-profile",
        element: <CreateProfileForm />,
      },
      {
        path: "/profile/:id/edit",
        element: <ProfileEdit />,
      },
      {
        path: "/translate",
        element: <TranslatorComponent />,
      },
    ],
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {AppRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            children={route.children}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
