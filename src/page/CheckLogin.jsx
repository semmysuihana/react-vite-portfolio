// src/components/CheckLogin.js
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function CheckLogin() {
  const navigate = useNavigate();
    
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // kalau belum login, paksa ke halaman login
      navigate("/login");
    }
  }, [navigate]);

  return null; // tidak render apa-apa
}

export default CheckLogin;
