import banner from '../../assets/banner-image.png';
import './style.component.css'

export const Banner = () => {
  return (
    <section>
      <div class="card text-bg-dark">
        <img src={banner} class="card-img banner__img" alt="Banner" />


        <div class="card-img-overlay  d-flex flex-column justify-content-end container">
          <h1 class="fw-bold banner__tittle">
            Febrero Promocional
          </h1>
          <p class="card-text fw-bold banner__p">
            Productos selecionados con 33% de descuento
          </p>
          <button className='btn btn-primary banner__button'>
            Ver Consolas
          </button>
        </div>

      </div>

    </section>
  )
}
