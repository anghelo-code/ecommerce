import { Logo } from "../shared/Logo";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Search = ( { classNameInput='' , classNameButton='', classNameForm='' }) => {
  return (
    <>
      <form className={ classNameForm } >
        <input 
          className={ ` ${ classNameInput }` } 
          type="search" 
          placeholder="¿Qué deseas buscar?" 
          aria-label="Search" 
        />

        <button className={ classNameButton } type="submit"> 
          <Logo logo={ faMagnifyingGlass } className="search__logo" /> 
        </button>
      </form>

    </>
  )
}
