import logo from './logo.svg';
import react from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer';
import Thome from './pages/Thome';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>

      <Route
          path="/home"
          element={
            <Thome/>
          }
      />

    <Route
        path="/login"
        element={
            <Login />
        }
      />
    
    <Route
        path="/footer"
        element={
          <Footer/>
        }
      />

    </Routes>
    </BrowserRouter>
);
}

export default App;
