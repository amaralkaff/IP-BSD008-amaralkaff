import React from "react";
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

function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Protected Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/profiles/:id" element={<Profile />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/profiles/create" element={<CreateProfileForm />} />
        <Route path="/profiles/edit/:id" element={<ProfileEdit />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/translator" element={<TranslatorComponent />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
