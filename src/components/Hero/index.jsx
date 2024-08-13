import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.containerWraper}>
      <div className={styles.container}>
        <div className={`${styles.col} ${styles.bigger}`}>
          <Link to="categories/furnitures" onClick={() => window.scrollTo(0, 0)}>
            <div className={styles.overlay}></div>
            <img src="homeimg1.jpg" alt="Imagem 1" />
            <p className={styles.main_description}>Conforto</p>
          </Link>
        </div>
        <div className={`${styles.col} ${styles.smaller}`}>
          <Link to="categories/skin-care" onClick={() => window.scrollTo(0, 0)}>
            <div className={styles.overlay}></div>
            <img src="homeimg22.jpg" alt="Imagem 2" />
            <p className={styles.main_description}>Skincare</p>
          </Link>
        </div>
        <div className={`${styles.col} ${styles.two_row}`}>
          <div className={`${styles.col}`}>
            <Link to="categories/kitchen" onClick={() => window.scrollTo(0, 0)}>
              <div className={styles.overlay}></div>
              <img src="homeimg3.jpg" alt="Imagem 3" />
              <p className={styles.main_description}>Cozinha</p>
            </Link>
          </div>
          <div className={`${styles.col} ${styles.fouritem}`}>
            <Link to="categories/electronics" onClick={() => window.scrollTo(0, 0)}>
              <div className={styles.overlay}></div>
              <img src="homeimg4.jpg" alt="Imagem 4" />
              <p className={styles.main_description}>Eletrônicos</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
