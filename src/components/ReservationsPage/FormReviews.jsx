import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";
import './styles/FormRevies.css';
import getDaysFromDates from "../../services/getDaysFromDates";

const FormReviews = ({ reserveSelected, setReserveSelected, closeModal }) => {
  const { handleSubmit, register, reset } = useForm();
  const [, , createReview] = useCrud();

  const submit = (data) => {
    const obj = {
      ...data,
      hotelId: reserveSelected?.hotelId,
      rating: +data.rating
    };

    createReview('/reviews', obj);
    reset({
      rating: '5',
      comment: ''
    });

    setReserveSelected();
    closeModal();
  }

  return (
    <div className="form-container">
      <div className="close-modal-btn" onClick={() => closeModal()}>X</div>
      <div className="content__modal">
        
        <img className="reserve__image" src={reserveSelected?.hotel.images[0].url} alt="" />
        <h3 className="reserve__hotel__name">{reserveSelected?.hotel.name}</h3>
        <div className="reserve__hotel__city">{reserveSelected?.hotel.city.name} {reserveSelected?.hotel.city.country}</div>
        <div className="reserve__reservationDays"><span className="reserve__title__days">Reservations's days:</span> <span className="reserve__days">{getDaysFromDates(reserveSelected?.checkIn, reserveSelected?.checkOut)}</span></div>
        <div><span className="reserve__title__subtotalprice">Total Price:</span><span className="reserve__dollar"> USD $</span><span className="color__price"> {Number(reserveSelected?.hotel.Price) * getDaysFromDates(reserveSelected?.checkIn, reserveSelected?.checkOut)}</span></div>

        <div className="form__content">
          <form onSubmit={handleSubmit(submit)}>
            <h3 className="title__reviews">Form Reviews</h3>
            <label>
              <span>Rating </span>
              <select className="select__reviews" {...register('rating')}>
                <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
                <option value="4">⭐️⭐️⭐️⭐️</option>
                <option value="3">⭐️⭐️⭐️</option>
                <option value="2">⭐️⭐️</option>
                <option value="1">⭐️</option>
              </select>
            </label>
            <label className="reviews__comments">
              <span className="comments">Comments </span>
              <textarea {...register('comment')} />
            </label>
            <button className="reviews__modal__button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormReviews;