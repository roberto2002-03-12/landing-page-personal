import '../styles/FooterStyle.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <footer>
      <h2>Otras redes</h2>
      <div className="other-info">
        <a href="https://www.linkedin.com/in/emilio-rf-contreras/" target='_blank'>
          <LinkedInIcon sx={{color: 'white', width: '30px', height: '30px'}}/>
        </a>
        <a href="https://github.com/roberto2002-03-12" target='_blank'>
          <GitHubIcon sx={{color: 'white',  width: '30px', height: '30px'}}/>
        </a>
      </div>
    </footer>
  )
}
