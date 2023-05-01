import { Logo } from '../shared/Logo';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const ProductHead = ({ title, link }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <h2 className="fw-bold" >{title}</h2>
      <a href={link} className="fw-bold text-decoration-none" >Ver todo <Logo logo={faArrowRight} /></a>
    </div>

  )
}
