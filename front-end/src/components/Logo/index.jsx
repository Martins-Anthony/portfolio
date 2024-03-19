import logoHeader from '../../assets/logo/logo_header_webcraft-anthony.fr.svg'
import logoFooter from '../../assets/logo/logo_footer_webcraft-anthony.fr.svg'
import { Link } from 'react-router-dom'
import { scrollToSection } from '../../utils/scrollToSection'

const Logo = ({ name }) => {
  const handleClick = () => {
    setTimeout(() => {
      scrollToSection('header')
    }, 100)
  }
  let logo
  switch (name) {
    case 'header':
      logo = (
        <Link to={'/'} onClick={handleClick}>
          <img src={logoHeader} alt="webcraft-anthony.fr logo" />
        </Link>
      )
      break
    case 'footer':
      logo = (
        <Link to={'/'} onClick={handleClick}>
          <img src={logoFooter} alt="webcraft-anthony.fr footer" />
        </Link>
      )
      break
    default:
      logo = (
        <Link to={'/'} onClick={handleClick} className="logo-style">
          WEBCRAFT-ANTHONY.FR
        </Link>
      )
      break
  }
  return logo
}

export default Logo
