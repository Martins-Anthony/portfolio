import logoHeader from '../../assets/logo/logo_header_webcraft-anthony.fr.svg'
import logoFooter from '../../assets/logo/logo_footer_webcraft-anthony.fr.svg'

const Logo = ({ name }) => {
  let logo
  switch (name) {
    case 'header':
      logo = <img src={logoHeader} alt="webcraft-anthony.fr logo" />
      break
    case 'footer':
      logo = <img src={logoFooter} alt="webcraft-anthony.fr footer" />
      break
    default:
      logo = <p className="logo-style">WEBCRAFT-ANTHONY.FR</p>
      break
  }
  return logo
}

export default Logo
