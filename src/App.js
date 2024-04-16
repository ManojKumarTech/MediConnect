import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Registration from './pages/Registration';
import Sample from "./pages/Sample";
import Thome from './pages/Thome';
import Mobile from './pages/Mobile';
import Bootstrap from './pages/Bootstrap';
import Bookingpage from './pages/Bookingpage';
import OrderPlacedPage from './pages/orderPlaced';
import HomePage from './pages/Home';
import MedicineList from './pages/MedicineList';
import MedicineProp from './pages/MedicineProps';


function App() {
  return (


    <BrowserRouter>
      <Routes>

        <Route
          path="/hospitals"
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
          path='/order'
          element={
            <Bookingpage />
          }
        />

        <Route
          path="/medicines"
          element={
            <MedicineProp />
          }
        />

        <Route
          path='/sample'
          element={
            <Sample />
          }
        />

        <Route
          path='/Mobile'
          element={
            <Mobile />
          }
        />

        <Route
          path='/home'
          element={
            <HomePage />
          }
        />

        <Route
          path='/orderplaced'
          element={
            <OrderPlacedPage />
          }
        />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
