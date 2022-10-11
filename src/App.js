import { Suspense, lazy } from "react";
// 1. Import NextUiProvider
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

const Product = lazy(() => import("./components/Product"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  // 2. Wrap your app with NextUiProvider
  return (
    <NextUIProvider>
      <Navbar />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Product />}>
              Product
            </Route>
            <Route path="/cart" element={<Cart />}>
              Cart
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </NextUIProvider>
  );
}

export default App;
