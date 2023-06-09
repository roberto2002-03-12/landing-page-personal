import { useState, useEffect, memo } from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/PortafolioStyle.css';
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, useTheme, useMediaQuery } from '@mui/material';
import PokeDexImg from '../img/pokedex.svg';
import GestionApiImg from '../img/gestion_usuario_api.svg';
import EjerciciosImg from '../img/ejercicios_js.svg';
import CalendarImg from '../img/calendar_app.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Portafolio = memo(() => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsWideScreen(true);
  }, []);

  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <section className='section-proyectos' id="section-proyectos">
      <ImageList 
        sx={{
          width: '900px', 
          height: '500px', 
          '@media (max-width: 991px)': {
            width: '80%',
            height: '500px'
          }
        }} 
        cols={mediaQuery ? 1 : 3}
        data-aos={isWideScreen ? 'fade-up' : '' }
        data-aos-duration="2000"
      >
        <ImageListItem key="Subheader" cols={mediaQuery ? 1 : 3}>
          <ListSubheader component="div" 
            sx={{
              backgroundColor: '#0B1520', 
              color: 'white', 
              fontSize: '32px',
              textAlign: 'center'
            }}
          >
            Lista de proyectos
          </ListSubheader>
        </ImageListItem>
        <ImageListItem>
          <img src={PokeDexImg} alt='' className='image-project' />
          <ImageListItemBar
            title='Pokedex'
            actionIcon={
              <IconButton sx={{color: 'white'}}>
                <a href='https://64545c1b312e513a7b24f1c9--merry-sawine-776fbb.netlify.app/' target='_blank'>
                  <TravelExploreIcon sx={{color: 'white'}} />
                </a>
                <a href="https://github.com/roberto2002-03-12/pokedex-react" target='_blank'>
                  <GitHubIcon sx={{color: 'white'}}/>
                </a>
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <img src={GestionApiImg} alt='' className='image-project' />
          <ImageListItemBar
            title='Gestion de usuarios API'
            actionIcon={
              <IconButton sx={{color: 'white'}}>
                <a href="https://github.com/roberto2002-03-12/gestion-usuario-node-v2/tree/main" target='_blank'>
                  <GitHubIcon sx={{color: 'white'}} />
                </a>
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <img src={EjerciciosImg} alt='' className='image-project' />
          <ImageListItemBar
            title='Ejercicios JS'
            actionIcon={
              <IconButton sx={{color: 'white'}}>
                <a href="https://github.com/roberto2002-03-12/ejercicios-javascript" target='_blank'>
                  <GitHubIcon sx={{color: 'white'}} />
                </a>
              </IconButton>
            }
          />
        </ImageListItem>
        <ImageListItem>
          <img src={CalendarImg} alt="" className='image-project' />
          <ImageListItemBar
            title='Calendar App'
            actionIcon={
              <IconButton sx={{color: 'white'}}>
                <a href="https://64545ad498bfb33acf262b69--storied-daffodil-d2a2f0.netlify.app/" target='_blank'>
                  <TravelExploreIcon sx={{color: 'white'}} />
                </a>
                <a href="https://github.com/roberto2002-03-12/13-react-calendar-mern" target='_blank'>
                  <GitHubIcon sx={{color: 'white'}}/>
                </a>
              </IconButton>
            }
          />
        </ImageListItem>
      </ImageList>
    </section>
  )
});
