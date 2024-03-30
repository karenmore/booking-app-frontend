import { useEffect, useState } from "react"
import { getHotelsThunk } from "../store/states/hotels.state"
import { useDispatch, useSelector } from "react-redux"
import ListHotels from '../components/HomePage/ListHotels'
import FilterName from "../components/HomePage/FilterName"
import FilterPrice from "../components/HomePage/FilterPrice"
import FilterCities from "../components/HomePage/FilterCities"
import '../components/HomePage/styles/HomePage.css'

const HomePage = () => {

  const [nameInput, setNameInput] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })


  const hotels = useSelector(states => states.hotels)

  const disptch = useDispatch()

  useEffect(() => {
    const url = 'http://localhost:8080/hotels'
    disptch(getHotelsThunk(url))
  }, [])


  const hotelsFilter = hotels?.filter(hotelInfo => {
    // Filter name
    const filterName = hotelInfo.name.toLowerCase().includes(nameInput)

    // Filter Price
    const priceHotel = hotelInfo.Price
    const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to

    // Filter cities


    return filterName && filterPrice
  })

  return (
    <>
      <section className="Home__Search">
        <FilterName setNameInput={setNameInput} />
      </section>

      <div className="Home__Container">
        <aside className="Home__Container_Filters">

          <FilterPrice setFromTo={setFromTo} />
          <FilterCities />

        </aside>

        <section className="Home__Container__Hotelcards">
          <div className="card-container">
            <ListHotels hotels={hotelsFilter} />
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage