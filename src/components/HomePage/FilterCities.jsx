import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/states/hotels.state'
import { useDispatch } from 'react-redux'
import './styles/HomePage.css'


const FilterCities = () => {

  const url = 'http://localhost:8080/cities'
  const [ cities, getCities ] = useFetch(url)

  useEffect(() => {
    getCities()
  }, [])

  //console.log(cities)

  const dispatch = useDispatch()
  

  const handleFilterCities = (id) => {
    let url = 'http://localhost:8080/hotels';
    if (id !== 'all cities') {
    url = `http://localhost:8080/hotels?cityId=${id}`;
    }
    dispatch(getHotelsThunk(url));
  };



  return (
    <div className="content__filter__cities">
    <h3 className="title__filter__cities">Cities</h3>
    <ul>
      <li className="list__filter__cities" onClick={() => handleFilterCities('all cities')}>All Cities</li>
      {
        cities?.map(city => (
          <li className="list__filter__cities" onClick={() => handleFilterCities(city.id)} key={city.id}>{city.name}</li>
        ))
      }
    </ul>
  </div>
  )
}

export default FilterCities