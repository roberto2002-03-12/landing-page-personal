import { TextField, Button, colors, styled } from '@mui/material';
import '../styles/ContactoStyle.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

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

export const Contacto = () => {
  return (
    <section className='section-contacto'>
      <div className="row">
        <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12 form-contacto">
          <h2 style={{color: 'white'}}>Contactame</h2>
          <div className="box-contacto">
            <div>
              <CustomTextField 
                variant='outlined'
                label='Nombres'
                sx={{marginTop: '15px', marginRight: '15px',
                marginBottom: '20px'}}
                InputLabelProps={{
                  style: {color: '#7A7A7A'}
                }}
              />
              <CustomTextField 
                variant='outlined'
                label='Apellidos'
                sx={{marginTop: '15px'}}
                InputLabelProps={{
                  style: {color: '#7A7A7A'}
                }}
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
                maxLength: 250
              }}
            />
          </div>
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
