import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './styles/HeaderShared.css'
import useAuth from "../../hooks/useAuth";

const HeaderShared = () => {
  const { isAuth, logOut } = useAuth();


  return (
    <header className="menu__top">
    <h1><Link className="menu__title" to='/'>BookingApp</Link></h1>
    <nav>
      <ul className="menu__nav">
        {isAuth && (
          <>
            <li><Link className="menu__li" to='/reservations'>Reservations</Link></li>
            <li style={{cursor: 'pointer'}} onClick={logOut}>Logout</li>
          </>
        )}
        {!isAuth && (
          <>
            <li><Link className="menu__li" to='/register'>Register</Link></li>
            <li><Link className="menu__li" to='/login'>Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  </header>
  );
}

export default HeaderShared;