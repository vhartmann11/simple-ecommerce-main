import styles from "../ProudOf/ProudOf.module.scss";
import { items } from "../AllData/AllData";
import { Link } from "react-router-dom";

function ProductItem() {
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className={styles.products__proud}>
          <Link
            onClick={() => window.scrollTo(0, 0)}
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
    </>
  );
}

export default ProductItem;