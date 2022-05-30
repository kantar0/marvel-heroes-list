import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CharactersList from "../components/CharactersList";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const Token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!Token) {
      navigate('/login', { replace: true });
    }
  }, [])
  

  return (
    <div>
      <Navbar />
      <CharactersList />
    </div>
  );
};
export default Home;
