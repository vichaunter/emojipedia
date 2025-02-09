import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/page3" element={<Page3 />} /> */}
      </Routes>
    </Router>
  );
};

export default RouterProvider;
