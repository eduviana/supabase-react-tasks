import Home from "./pages/Home";
import Login from "./pages/Login";
import { supabase } from "./supabase/client";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
