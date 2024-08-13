import ProductItem from "../ProductItem"
import styles from "./ProudOf.module.scss"

const ProudOf = () => {
    return (
        <div className={styles.proudof}>
            <h2 className={styles.container__h2}>Produtos que recomendamos</h2>
            <div className={styles.container} >
                <div className={styles.products__grid}>
                    <ProductItem />
                </div>
            </div>
        </div>
    );
}

export default ProudOf