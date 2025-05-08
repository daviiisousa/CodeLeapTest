import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <main className="font-primary bg-background h-full min-h-screen">
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
