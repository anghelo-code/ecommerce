import { Logo } from "./Logo";
import { Search } from "./Search";
import './style.component.css';

export const Navbar = ({  hrefButton='', textButton='', stateButton }) => {
  return (
    <header className="bg-light navbar-p">
      <nav className="container navbar d-flex justify-content-between align-items-center h-100">
          <div className="d-flex align-items-center">
            <Logo />

            <Search 
              classNameForm="d-none search__form d-md-flex" 
            />
          </div>

          { stateButton  && 
          <a className="btn btn-outline-primary nav__button text-center nav__btn" href={ hrefButton }  >
            { textButton }
          </a>
          }

          <Search 
            classNameForm="d-md-none"
            classNameInput="d-none" 
            classNameButton="search__button-phone" 
          />
      </nav>
      
    </header>
  )
}
