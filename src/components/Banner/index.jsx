import banner from '../../assets/banner-image.png';
import { Content } from './Content';
import './style.component.css';

export const Banner = () => {
  return (
    <section>
      <div className="card text-bg-dark">
        <img src={banner} className="card-img banner__img" alt="Banner" />

        <Content/>
      </div>

    </section>
  )
}
