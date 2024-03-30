import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import UnknownPages from './Pages/UnknownPages'
import HotelInfoPage from './Pages/HotelInfoPage'
import HeaderShared from './components/shared/HeaderShared'
import { ToastContainer } from 'react-toastify'
import ReservationsPage from './Pages/ReservationsPage'
import ProtectedRoutes from './Pages/ProtectedRoutes'

function App() {


  return (
    <div>
      <HeaderShared/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/hotel/:id' element={<HotelInfoPage />}/>
        <Route                   element={<ProtectedRoutes />}>
              <Route path='/reservations' element={<ReservationsPage />} />
        </Route>
        <Route path='*' element={UnknownPages}/>
      </Routes>
    </div>
  )
}

export default App