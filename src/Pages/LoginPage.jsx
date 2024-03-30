import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import '../components/LoginPage/styles/LoginPage.css'
import notify from '../components/ToastNotifications'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {

  const { handleSubmit, reset, register } = useForm()

  const { loginUser, error , isAuth} = useAuth()

  const navegate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navegate('/'); 
    }
  }, [navegate]);


  useEffect(() => {
    if(error){
      notify(error, 'error')
    }
  }, [error])

  const submit = async(data) => {
    try{
      await loginUser(data)
      reset({
        email: '',
        password: ''
      })
    }catch (error) {
      notify(error, 'error')
    }
  }


  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }


  return (
    <div className="login__container">
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label className="login__label__email">
          <span>Email</span>
          <input className="login__inputs" {...register('email')} type="email" />
        </label>
        <label className="login__label__password">
          <span>Password</span>
          <input className="login__inputs" {...register('password')} type="password" />
        </label>
        <button className="login__button">Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
