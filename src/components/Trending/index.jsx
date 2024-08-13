import React, { useRef } from 'react';
import TrendingItem from '../TrendingItem';
import styles from './Trending.module.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Trending = () => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 835;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 835;
        }
    };

    return (
        <section className={styles.trending}>
            <div className={styles.container}>
                <div className={styles.trending__title}>
                    <h3>Mais visitados</h3>
                </div>
                <div className={styles.trending__arrow}>
                    <div className={styles.btns}>
                        <button title="scroll left" onClick={slideLeft}>
                            <FaArrowLeft />
                        </button>
                        <button title="scroll right" onClick={slideRight}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.row_container} ref={sliderRef}>
                <div className={styles.itemContainer}>
                    <TrendingItem />
                </div>
            </div>
        </section>
    );
};

export default Trending;
