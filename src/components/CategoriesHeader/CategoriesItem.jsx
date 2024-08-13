import { Link } from "react-router-dom";
import { items } from "../AllData/AllData";
import styles from "../ProudOf/ProudOf.module.scss"

function CategoriesItem() {
    return (
        <>
            <div className={styles.proudof}>
                <div className={styles.container}>
                    <div className={styles.products__grid}>
                        {items.map((item) => (
                            <div key={item.id} className={styles.products__proud}>
                                <Link
                                    onClick={() => window.top(0, 0)}
                                    to={`/categories/product/${item.id}`}
                                >
                                    <div className={styles.products__header}>
                                        <img src={item.img} alt="product1" />
                                    </div>
                                    <div className={styles.item__details}>
                                        <p>{item.description}</p>
                                        <p className={styles.item__price}>R${item.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoriesItem;