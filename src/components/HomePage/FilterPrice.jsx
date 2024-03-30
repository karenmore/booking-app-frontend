import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/HomePage.css'

const FilterPrice = ({ setFromTo }) => {

    const { handleSubmit, register, reset } =  useForm()

    const submit = data => {
        const obj = {
            from: +data.from === 0 ? 0 : +data.from,
            to: +data.to === 0 ? Infinity : +data.to
        }
        setFromTo(obj)
    }


  return (
    <div>
    <h2 className="Home__title__filters">Filters</h2>
    <h3 className="Home__price__filters">Price</h3>
    <form className='Home__form__filters' onSubmit={handleSubmit(submit)}>
        <span className="Home__from__filters">From</span>
        <input {...register('from')}  className="Home__from__input__filters" type="number" />
      
        <span className="Home__to__filters">To</span>
        <input {...register('to')} className="Home__to__input__filters" type="number" />
     
      <button className="Home__button__filters">Apply</button>
    </form>
  </div>
  )
}

export default FilterPrice
