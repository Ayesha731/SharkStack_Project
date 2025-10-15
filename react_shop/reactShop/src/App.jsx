import React from "react";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ShopingCartPage from "./pages/ShopingCartPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import CardDetailPage from "./pages/CardDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const App = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={isLoggedIn === "true" ? <Navigate to="/" /> : <SignInPage />}
        />
        <Route
          path="/sign-up"
          element={isLoggedIn === "true" ? <Navigate to="/" /> : <SignUpPage />}
        />

        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route exact path="/login" element={<Navigate to={"/"} />} />
          <Route path="/sign-up" element={<Navigate to={"/"} />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" element={<ShopingCartPage />} />
          <Route path="/cart-details" element={<CardDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
