import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = ({ logo, className='' }) => {
  return (
    <FontAwesomeIcon icon={ logo } className={ className } />
  )
}
