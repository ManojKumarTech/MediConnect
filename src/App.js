import logo from './logo.svg';
import react from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route
        path="/login"
        element={
            <Login />
        }
      />

    </Routes>
</BrowserRouter>
);
}

export default App;
