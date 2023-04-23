import starWars from '../../assets/star-wars.png';

export const ProductCard = ({ text, price, link }) => {
  return (
    <div className="col-6 col-md-3 col-lg-2">
      <article className="product__card" >
        <img src={ starWars } alt="Star Wars" className="product__img" />
        <small className="product__text" >{ text }</small>
        <p className="fw-bold product__p">$ { price }</p>
        <a href={ link } className="product__link" >Ver producto</a>
      </article>
    </div>
  )
}
