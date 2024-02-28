import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Sample from "./pages/Sample";
import Thome from './pages/Thome';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route
          path=""
          element={
            <Thome />
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
            <Footer />
          }
        />

        <Route
          path='/sample'
          element={
            <Sample/>
          }
          />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
