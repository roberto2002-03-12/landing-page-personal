import landingPageApi from '../api/emailApi';
import { useDispatch } from 'react-redux';
import { onClear, onChecking } from '../store';
import Swal from 'sweetalert2';

export const useEmailApi = () => {
  const dispatch = useDispatch();

  const subirFormulario = async (obj, tokenCaptcha) => {
    dispatch(onChecking());

    const newObj = {
      ...obj,
      tokenCaptcha
    };

    try {
      await landingPageApi.post('/mensajes/', newObj);
      Swal.fire('Mensaje enviado', 'Gracias por mostrar interes, trataré de responderte lo más pronto posible.', 'success');
      setTimeout(() => {
        dispatch(onClear());
      }, 10)
    } catch (err) {
      Swal.fire('Hubo un error al enviar datos', 'Error al enviar mensaje, por favor intenta de nuevo o puedes enviarme un mensaje en las otras opciones', 'error');
      setTimeout(() => {
        dispatch(onClear());
      }, 10)
    };
  }


  return {
    subirFormulario
  };
};
