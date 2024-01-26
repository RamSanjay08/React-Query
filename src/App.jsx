import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./FetchingData/Home";
import About from "./FetchingData/About";
import Blog from "./FetchingData/Blog";
import ApiFetchQuery from "./ApiFetch/ApiFetchQuery"

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <nav >
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter> */}
      <ApiFetchQuery />
    </>
  );
};

export default App;
