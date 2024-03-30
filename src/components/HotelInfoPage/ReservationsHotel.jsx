import React from 'react'
import useCrud from '../../hooks/useCrud'
import { useForm } from 'react-hook-form'
import '../../components/HotelInfoPage/styles/HotelInfoPage.css'
import { useNavigate } from 'react-router-dom'

const ReservationsHotel = ({ hotelId }) => {
    
  const {handleSubmit, register, reset} = useForm()

  const navegate = useNavigate()
  
  const [ ,,createReservation,, error] = useCrud()

  const submit = data => {
    const obj = {
      ...data,
      hotelId
    }
    createReservation('/bookings', obj)

    navegate('/reservations')
  } 

  return (
    <div className="reservation__container">
    <h2 className="reservation__title">Reservations</h2>
    <form className="form__reservation" onSubmit={handleSubmit(submit)}>
      <label className="content__info">
        <span className="span__chekInOut">Check-in</span>
        <input className="input__checkInOut" {...register('checkIn')} type="date" />
      </label>
      <label className="content__info">
        <span className="span__chekInOut">Check-out</span>
        <input className="input__checkInOut" {...register('checkOut')} type="date" />
      </label>
      <button className="button__booking">Booking</button>
    </form>
  </div>
  )
}

export default ReservationsHotel