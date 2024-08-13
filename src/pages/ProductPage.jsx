import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { items } from '../components/AllData/AllData';
import Trending from '../components/Trending';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import '../components/ProductPage.scss';

function ProductPage({ openCart }) {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item.img);
  const { addToCart } = useContext(CartContext);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    setImage(item.img);
    setQuantity(1);  // Resetar a quantidade quando mudar de item
  }, [item]);


  const changeImage = (e) => setImage(e.target.src);
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const calcPrice = () => (quantity * item.price).toFixed(2);

  const showNotify = () => {
    setNotify(true);
    setTimeout(() => setNotify(false), 25000);
  };

  const handleBuy = () => {
    addToCart(item, quantity);
    showNotify();
  };

  return (
    <>
      <div onAnimationEnd={() => setNotify(false)} className={`notify ${notify ? 'slide-in' : ''}`}>
        <p>Seu item foi adicionado ao carrinho &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <Link onClick={() => window.scrollTo(0, 0)} to={-1}>
              <FaLongArrowAltLeft /> Voltar
            </Link>
            <div className="product-left">
          
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs">
                <img onClick={changeImage} src={item.img} alt="product" />
                {item.otherImgs.map((img, idx) => (
                  <img key={idx} onClick={changeImage} src={img} alt="product" />
                ))}
              </div>
            </div>
            <div className="product-right">
            <h3 className="product-big-name">{item.description}</h3>
              <p className="product-spec">{item.specs}</p>
              <div className="product-quant">
                <p>Quantidade</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">R${calcPrice()}</p>
              </div>
              <div className="atc-buy">
                <button onClick={handleBuy} className="buy-btn">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Textura:</p>
              <p className="title-desc">{item.texture}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Peso:</p>
              <p className="title-desc">{item.weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Tamanho:</p>
              <p className="title-desc">{item.size}</p>
            </div>
          </div>
        </div>
        <Trending />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;