import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <a>Sobre</a>
                <a>Localização</a>
                <a>FAQ</a>
                <a>Fale conosco</a>
            </div>
            <p>Desenvolvido por Vinicius Hartmann</p>
        </footer>

    )
}

export default Footer
