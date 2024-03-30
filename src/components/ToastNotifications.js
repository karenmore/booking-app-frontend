import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Función para mostrar notificaciones personalizadas
const notify = (message, type = 'info') => {
  // Verifica el tipo de notificación y llama al método correspondiente
  if (toast[type]) {
    toast[type](message); // Llama al método correspondiente con el mensaje
  } else {
    // Si el tipo no es válido, muestra una notificación por defecto
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export default notify;
export { ToastContainer };
