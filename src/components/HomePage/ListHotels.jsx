import HotelCard from "./HotelCard";
import notify from '../ToastNotifications'
import { useEffect, useState } from "react";
import './styles/HomePage.css'

const ListHotels = ({ hotels }) => {

  const [notificationMessage, setNotificationMessage] = useState('Estos son los hoteles Disponibles')

  useEffect(() => {
    if(  !hotels || hotels?.length === 0){
      setNotificationMessage('No there hotels with this name');
      notify(notificationMessage)
    }
  }, [hotels]);


  return (
    <div className="Hotel__card__container">
      {hotels && hotels.length > 0 && hotels.map(hotel => (
        <div className="hotel-container" key={hotel.id}>
          <div className="hotel-card-wrapper">
            <HotelCard
              hotel={hotel}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListHotels;