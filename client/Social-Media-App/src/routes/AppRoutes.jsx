import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import PostPage from "../pages/PostPage";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import CreateProfileForm from "../components/CreateProfileForm";
import ProfileEdit from "../components/ProfileEdit";
import TranslatorComponent from "../components/TranslatorComponent";

function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <ProtectedRoute>
              <PostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/create"
          element={
            <ProtectedRoute>
              <CreateProfileForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/edit/:id"
          element={
            <ProtectedRoute>
              <ProfileEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/translator"
          element={
            <ProtectedRoute>
              <TranslatorComponent />
            </ProtectedRoute>
          }
        />
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Catch all route */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
