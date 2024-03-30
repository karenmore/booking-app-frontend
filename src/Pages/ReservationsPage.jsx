import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"

const ReservationsPage = () => {
  const [reserveSelected, setReserveSelected] = useState();
  const [showForm, setShowForm] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const [reservations, getReservations, , deleteReservation] = useCrud();

  useEffect(() => {
    getReservations('/bookings');
  }, []);

  useEffect(() => {
    if (reservations && reservations.length === 0 && !showNotification) {
      setShowNotification(true);
    }
  }, [reservations, showNotification]);


  //console.log(reserveSelected)
  
  return (
    <div>
      <h2 className="reservation__title">Reservations</h2>
      
      {showNotification && <div className="notification">No tienes reservas</div>}
      {showForm && (
        <FormReviews
          reserveSelected={reserveSelected}
          setReserveSelected={setReserveSelected}
          closeModal={() => setShowForm(false)}
        />
      )}
      <div>
        {reservations?.map(reserve => (
          <ReserveCard
            key={reserve.id}
            reserve={reserve}
            deleteReservation={deleteReservation}
            setReserveSelected={setReserveSelected}
            onReviewClick={() => {
              setReserveSelected(reserve);
              setShowForm(true);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ReservationsPage;