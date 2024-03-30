import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import OtherHotels from '../components/HotelInfoPage/OtherHotels'
import ReservationsHotel from '../components/HotelInfoPage/ReservationsHotel'
import SliderImgs from '../components/HotelInfoPage/SliderImgs'
import CommentsSection from '../components/HotelInfoPage/CommentsSection'
import '../components/HotelInfoPage/styles/HotelInfoPage.css'

const HotelInfoPage = () => {

  const { id } = useParams()

  const url = `https://booking-app-backend-94jn.onrender.com/hotels/${id}`

  const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [url])

  console.log(hotel)


  return (
    <div className='hotel__container' style={{ overflow: 'hidden' }} >

      <header className="hotelInfo__title">
        <h2>{hotel?.name}</h2>
        <span>rating</span>
      </header>
      
      <section className="hotelInfo__img-map">
        <div className="hotelInfo__img">
          <SliderImgs hotel={hotel} />
        </div>
        <div>
          <img src={hotel?.images[0].url} alt="" />
        </div>
        <div className="hotelInfo__map">
          {
            hotel &&
            (
              <Map
                center={[+hotel.lat, +hotel.lon]}
                height={300}
                defaultZoom={13}
                style={{ width: '100%' }}
              >
                <Marker
                  width={50}
                  color='#34a356'
                  anchor={[+hotel.lat, +hotel.lon]}
                />
                <ZoomControl />
              </Map>
            )
          }
        </div>
      </section>
      <div>
        <div className="hotelInfo__country">
          <span>{hotel?.city.name}  </span>
          <span>{hotel?.city.country}</span>
        </div>
        <div className="hotelInfo__address">
          <p>
            <i className='bx bx-map'></i>
            <span>{hotel?.Address}</span>
          </p>
        </div >
        <p className="hotelInfo__description">{hotel?.description}</p>
      </div>

      <CommentsSection
        hotelId={hotel?.id}
      />
      {
        localStorage.getItem('token') && (
          <ReservationsHotel
            hotelId={hotel?.id}
          />
        )
      }
      <OtherHotels
        cityId={hotel?.city.id}
        hotelId={hotel?.id}
      />
    </div>
  )
}

export default HotelInfoPage