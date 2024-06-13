import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import App from "./App";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Followers from "./components/Followers";
import Posts from "./components/Posts";
import Brands, { brandsLoader } from "./components/Brands";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import BrandsList from "./components/BrandsList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="navbar" element={<Navbar />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="followers" element={<Followers />}></Route>
      <Route path="posts" element={<Posts />}></Route>

      <Route path="brands" element={<BrandsList />}>
        <Route index element={<Brands />} loader={brandsLoader}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
