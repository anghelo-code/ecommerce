import banner from '../../assets/banner-image.png';
import { Content } from './Content';
import './style.component.css';

export const Banner = () => {
  return (
    <section>
      <div class="card text-bg-dark">
        <img src={banner} class="card-img banner__img" alt="Banner" />

        <Content/>
      </div>

    </section>
  )
}
