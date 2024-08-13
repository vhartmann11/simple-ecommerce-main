import { Link } from "react-router-dom";
import { items } from "../AllData/AllData";
import styles from "../ProudOf/ProudOf.module.scss"

function CategoriesItem() {
  const filteredItems = items.filter((item) => item.category === "chair");
  return (
    <>
      <div className={styles.proud__container}>
        <div className={styles.container}>
          <div className={styles.products__grid}>
            {filteredItems.map((item) => (
              <div key={item.id} className={styles.products__proud}>
                <Link to={`/categories/product/${item.id}`}>
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