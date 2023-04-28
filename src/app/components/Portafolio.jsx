import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import '../styles/PortafolioStyle.css';
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, IconButton } from '@mui/material';
import PokeDexImg from '../img/pokedex.svg';
import GestionApiImg from '../img/gestion_usuario_api.svg';
import EjerciciosImg from '../img/ejercicios_js.svg';

export const Portafolio = () => {
  return (
    <section className='section-proyectos'>
      <ImageList sx={{width: '1000px', height: '500px'}}>
        <ImageListItem key="Subheader" cols={3}>
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
          <img src={PokeDexImg} alt='' />
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
          <img src={GestionApiImg} alt='' />
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
          <img src={EjerciciosImg} alt='' />
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
