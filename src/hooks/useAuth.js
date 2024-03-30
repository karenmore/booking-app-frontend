import { useEffect, useState } from 'react';
import axios from 'axios';
import notify from '../components/ToastNotifications';

const useAuth = () => {
    const [error, setError] = useState(null);
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

    const createNewUser = (data) => {
        const url = 'http://localhost:8080/users';
        axios.post(url, data)
            .then((res) => {
                notify('Usuario registrado con éxito', 'success');
                notify('Por favor hacer Login', 'info');
                setError(null); // Limpiar el error si la petición es exitosa
            })
            .catch((err) => {
                if(err.response){
                    setError(err.response.data.message);
                } else {
                    setError('Error al conectar con el servicio');
                }
            });
    };

    // Login

    const loginUser = (data) => {
        const url = 'http://localhost:8080/users/login'
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            setIsAuth(true)
            notify('Login exitoso', 'success');
            setError(null); 
            window.location.reload();
        })    
        .catch((err) => {
            if(err.response){
                setError(err.response.data.message)
            }else{
                setError('Error al conectar con el servicio')
            }
        })
    }

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setIsAuth(false)
    }

    return {isAuth, createNewUser, loginUser, logOut, error  }
}

export default useAuth