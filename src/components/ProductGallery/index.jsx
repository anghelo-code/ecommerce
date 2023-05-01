import { useProductRender } from './hook/useProductRender';
import { ProductCard } from './ProductCard';
import { ProductHead } from './ProductHead';
import './style.component.css';

export const ProductGallery = ({ title, link, products }) => {

  const productsRender = useProductRender( products );

  return (
    <section className="pt-5" >
      <ProductHead title={ title } link={ link } />

      <div className="row h-25 gy-4">
        {
          productsRender.map( (product, index) => (
            <ProductCard key={ index } { ...product } />
          ))
        } 
      </div>    
    </section>
  )
}
