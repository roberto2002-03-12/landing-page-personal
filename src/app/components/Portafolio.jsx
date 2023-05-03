import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import '../styles/PortafolioStyle.css';
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton, useTheme, useMediaQuery } from '@mui/material';
import PokeDexImg from '../img/pokedex.svg';
import GestionApiImg from '../img/gestion_usuario_api.svg';
import EjerciciosImg from '../img/ejercicios_js.svg';

export const Portafolio = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <section className='section-proyectos'>
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
                <a href='https://github.com/roberto2002-03-12/pokedex-react' target='_blank'>
                  <TravelExploreIcon sx={{color: 'white'}} />
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
                  <TravelExploreIcon sx={{color: 'white'}} />
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
                  <TravelExploreIcon sx={{color: 'white'}} />
                </a>
              </IconButton>
            }
          />
        </ImageListItem>
      </ImageList>
    </section>
  )
}
