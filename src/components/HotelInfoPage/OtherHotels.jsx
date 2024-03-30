import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'
import '../HomePage/styles/HomePage.css'


const OtherHotels = ({ cityId, hotelId }) => {

    const url = `http://localhost:8080/hotels?cityId=${cityId}`

    const [hotels, getHotels] = useFetch(url)

    useEffect(() => {
      if(cityId){
        getHotels()
    }
    // cityId && getHotels()
    }, [cityId])

    console.log(hotels)


  return (
    <div className="otherHotel__title">
      <h2 className="otherHotel__container__card">Other Hotels in {hotels?.[0].city.name}</h2>
      <div className="Hotel__card__container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {
          hotels?.filter(hotelInfo => hotelInfo.id !== hotelId).map(hotelInfo => (
            <div className="hotel-container" key={hotelInfo.id}>
              <div className="hotel-card-wrapper" >
                <HotelCard
                  
                  hotel={hotelInfo}
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OtherHotels