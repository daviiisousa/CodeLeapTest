import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signUp";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";

export function App() {
  return (
    <main className="font-primary bg-background h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}


