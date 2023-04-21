import logo from '../../assets/logo-alura.png';

export const Logo = () => {
  return (
    <>
      <a className="navbar-brand" href="#">
        <img src={ logo } alt="Alura Geek" width="176" height="50"  className="nav__logo"  />
      </a>
    </>
  )
}
