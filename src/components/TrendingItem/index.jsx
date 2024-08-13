import { items } from "../AllData/AllData";
import styles from "./TrendingItem.module.scss";
import { Link } from "react-router-dom";

function TrendingItem() {
  const filteredItems = items.filter((item) => item.id >= 7);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className={styles.row_item}>
          <Link
            to={`/categories/product/${item.id}`}
            onClick={() => window.scrollTo(0, 0)} 
            className={styles.row_item}
          >
            <div className={styles.item_header}>
              <img src={item.img} alt="product" />
            </div>
            <div className={styles.item_description}>
              <p>{item.description}</p>
              <p className={styles.item_price}>R${item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;