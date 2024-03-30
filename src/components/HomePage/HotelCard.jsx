import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'

const HotelCard = ({ hotel }) => {

  const navigate = useNavigate()

  const handelNavigate = () => {
    navigate(`/hotel/${hotel.id}`)

  }

  return (
    <article>
    <header>
      <img className="HotelCard__Image" src={hotel.images[0].url} alt="" />
    </header>
    <section className="HotelCard__Section">
      <h3 className="HotelCard__title">{hotel.name}</h3>
      <span className="HotelCard__Raiting">Rating</span>
      <p className="HotelCard__Country">{hotel.city.name}, {hotel.city.country}</p>
      <div className="HotelCard__Price">$ {hotel.Price}</div>
    </section>
    <button className="HotelCard__Button" onClick={handelNavigate}>See more...</button>
  </article>
  )
}

export default HotelCard