import { FaLongArrowAltLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../ProudOf/ProudOf.module.scss"

function CategoriesHeader() {

  const [btnName, setBtnName] = useState("Nossos produtos");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.catego__header}>
          <div className={styles.title__home}>

            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <FaLongArrowAltLeft /> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className={styles.filter__btns}>
            <Link to="all" onClick={() => handleBtnName("Todos")}>
              <button>Todos</button>
            </Link>
            <Link to="furnitures">
              <button onClick={() => handleBtnName("Móveis")}>
                Móveis
              </button>
            </Link>
            <Link to="electronics">
              <button onClick={() => handleBtnName("eletrônicos")}>
                Eletrônicos
              </button>
            </Link>
            <Link to="lamps">
              <button onClick={() => handleBtnName("lâmpadas")}>
                Lâmpadas</button>
            </Link>
            <Link to="kitchen">
              <button onClick={() => handleBtnName("cozinha")}>
                Cozinha</button>
            </Link>
            <Link to="chairs">
              <button onClick={() => handleBtnName("cadeiras")}>
                Cadeiras</button>
            </Link>
            <Link to="skin-care">
              <button onClick={() => handleBtnName("skin care")}>
                Skin Care
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;