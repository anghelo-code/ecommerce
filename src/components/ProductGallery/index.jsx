import { Logo } from '../shared/Logo';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ProductCard } from './ProductCard';
import './style.component.css';

export const ProductGallery = ({ title, link }) => {
  return (
    <section className="pt-5" >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 className="fw-bold" >{ title }</h2>
        <a href={ link } className="fw-bold text-decoration-none" >Ver todo <Logo logo={ faArrowRight } /></a>
      </div>
      
      <div className="row h-25 gy-4">
       <ProductCard text="Producto XYZzz" price="60" link="#" />
       <ProductCard text="Producto XYZzz" price="60" link="#" />
       <ProductCard text="Producto XYZzz" price="60" link="#" />
       <ProductCard text="Producto XYZzz" price="60" link="#" />
       <ProductCard text="Producto XYZzz" price="60" link="#" />
       <ProductCard text="Producto XYZzz" price="60" link="#" />
      </div>
    
    </section>
  )
}
