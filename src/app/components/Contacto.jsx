import { useForm, useEmailApi } from '../../hooks'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { TextField, Button, styled } from '@mui/material';
import '../styles/ContactoStyle.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Cargando } from './';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    width: '150px',
    color: 'white',
    '& fieldset': {
      borderColor: '#1A90FC', // color del borde normal
    },
    '&:hover fieldset': {
      borderColor: '#1A90FC', // color del borde al pasar el cursor
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1A90FC', // color del borde al estar enfocado
    },
  },
  '@media (min-width: 1200px)': {
    '& .MuiOutlinedInput-root': {
      width: '185px',
    },
  },
});

const CustomTextFieldLong = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
    width: '315px',
    color: 'white',
    '& fieldset': {
      borderColor: '#1A90FC', // color del borde normal
    },
    '&:hover fieldset': {
      borderColor: '#1A90FC', // color del borde al pasar el cursor
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1A90FC', // color del borde al estar enfocado
    },
  },
  '@media (min-width: 1200px)': {
    '& .MuiOutlinedInput-root': {
      width: '385px',
    },
  },
});

const inputs = {
  nombres: '',
  apellidos: '',
  email: '',
  mensaje: ''
}

const inputsValidation = {
  nombres: [(str) => str.length >= 3, 'Nombre no valido'],
  apellidos: [(str) => str.length >= 3, 'Apellido no valido'],
  email: [(str) => str.includes('@'), 'Email no valido'],
  mensaje: [(str) => str.length >= 10, 'El mensaje debe tener más de 10 caracteres y menos de 255 caracteres']
}

export const Contacto = () => {
  const { status } = useSelector(state => state.status);
  const { subirFormulario } = useEmailApi();

  const [formSubmited, setFormSubmited] = useState(false);
  const [recaptcha, setRecaptcha] = useState('');

  const {
    nombres,
    apellidos,
    email,
    mensaje,

    nombresValid,
    apellidosValid,
    emailValid,
    mensajeValid,

    formState,
    onInputChange,
    onResetForm,
    isFormValid
  } = useForm(inputs, inputsValidation);

  const onChangeCaptcha = (token) => {
    setRecaptcha(token);
  }

  const onSubmitMessage = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    if (recaptcha == '') return;
    subirFormulario(formState, recaptcha);
    setFormSubmited(false);
    onResetForm();
  }

  return (
    <section className='section-contacto'>
      <div className="row">
        <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12 form-contacto">
          <h2 style={{color: 'white', marginBottom: '20px'}}>Contactame</h2>
          {
            (status === 'sending' ? (
              <Cargando />
            ) : (
              <div className="box-contacto">
                <form onSubmit={ onSubmitMessage }>
                <div>
                  <CustomTextField 
                    variant='outlined'
                    label='Nombres'
                    sx={{marginTop: '15px', marginRight: '15px',
                    marginBottom: '20px'}}
                    InputLabelProps={{
                      style: {color: '#7A7A7A'}
                    }}
                    inputProps={{
                      maxLength: 100
                    }}
                    value={ nombres }
                    onChange={ onInputChange }
                    name='nombres'
                    error={ !!nombresValid && formSubmited }
                    helperText={ !!nombresValid && formSubmited ? nombresValid : '' }
                  />
                  <CustomTextField 
                    variant='outlined'
                    label='Apellidos'
                    sx={{marginTop: '15px'}}
                    InputLabelProps={{
                      style: {color: '#7A7A7A'}
                    }}
                    inputProps={{
                      maxLength: 100
                    }}
                    value={ apellidos }
                    onChange={ onInputChange }
                    name='apellidos'
                    error={ !!apellidosValid && formSubmited }
                    helperText={ !!apellidosValid && formSubmited ? apellidosValid : '' }
                  />
                </div>
                <CustomTextFieldLong 
                  variant='outlined'
                  label='Email'
                  sx={{
                    marginBottom: '20px'
                  }}
                  InputLabelProps={{
                    style: {color: '#7A7A7A'}
                  }}
                  inputProps={{
                    maxLength: 105
                  }}
                  value={ email }
                  onChange={ onInputChange }
                  name='email'
                  error={ !!emailValid && formSubmited }
                  helperText={ !!emailValid && formSubmited ? emailValid : '' }
                />
                <CustomTextFieldLong 
                  variant='outlined'
                  label='Mensaje'
                  multiline
                  rows={5}
                  InputLabelProps={{
                    style: {color: '#7A7A7A'}
                  }}
                  inputProps={{
                    maxLength: 255
                  }}
                  value={ mensaje }
                  onChange={ onInputChange }
                  name='mensaje'
                  error={ !!mensajeValid && formSubmited }
                  helperText={ !!mensajeValid && formSubmited ? mensajeValid : '' }
                />
                <ReCAPTCHA
                  sitekey={'6Lc9wN0lAAAAAL9UG55KIDk0spYVkSjXXhUAn_qk'}
                  onChange={onChangeCaptcha}
                  size='normal'
                  style={{paddingTop: '20px'}}
                />
                <div className='button-container'>
                  <Button
                    variant='outlined'
                    sx={{
                      borderRadius: '20px', 
                      width: '300px',
                    }}
                    type='submit'
                  >
                    Enviar
                  </Button>
                </div>
                </form>
              </div>
            )
          )}
          
        </div>
        <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12 info-contacto">
          <div className="info-box">
            <h5>Información de contacto</h5>
            <p className='info-contacto-p'>Suelo responder más rápido mediante mensajes de Whatsapp.</p>
            <div className='info-box-data'>
              <EmailIcon sx={{marginRight: '5px', color: 'white'}}/>
              <p>Email: emilio.contreras@tecsup.edu.pe robertog-18@hotmail.com</p>
            </div>
            <div className="info-box-data">
              <PhoneAndroidIcon sx={{marginRight: '5px', color: 'white'}}/>
              <p>Phone: +51 965 368 241</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
