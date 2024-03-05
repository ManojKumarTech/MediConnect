import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer';
import Registration from './pages/Registration';
import Sample from "./pages/Sample";
import Thome from './pages/Thome';
import Mobile from './pages/Mobile';


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

          <Route
            path='/Mobile'
            element={
              <Mobile/>
            }
            />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
