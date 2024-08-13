import { Link } from 'react-router-dom'
import styles from './BannerReverse.module.scss'

const BannerReverse = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.banner__text}>
                    <div className={styles.banner__left}>
                        <div className={styles.banner__left__text}>
                            <h3 className={styles.banner__title}>Estilo de vida criativo e harmonioso</h3>
                            <p className={styles.banner__description}>RAOUF Os produtos são todos feitos em tamanhos padrão para que você possa combiná-los livremente.</p>
                            <Link to='/categories/all' onClick={() => window.scrollTo(0, 0)} className={styles.banner__button}>
                                Compre aqui
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.banner__left}>
                    <img src="./bannerright.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}


export default BannerReverse