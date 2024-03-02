import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer';
import Sample from "./pages/Sample";
import Thome from './pages/Thome';
import Registration from './pages/Registration';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route
          path="/home"
          element={
            <Thome />
          }
        />

        <Route
          path=""
          element={
            <Registration />
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
