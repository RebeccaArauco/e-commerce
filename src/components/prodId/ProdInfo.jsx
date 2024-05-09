import React, { useState } from 'react';
import './styles/prodInfo.css'
import { postCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProdInfo = ({product}) => {

  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLess = () => {
    if (counter > 1) {
    setCounter(counter - 1);   
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1);
  }

  const handleBuy = () => {
    dispatch(postCartThunk('/cart', {
      quantity: counter,
      productId: product.id,
    }));
    navigate('/cart');
  }

  return (
    <article className='prodInfo'>
      <h3 className='prodInfo__brand'>{product?.brand}</h3>
      <h2 className='prodInfo__title'>{product?.title}</h2>
      <p className='prodInfo__description'>{product?.description}</p>
      <div className='prodInfo__container'>
        <p className='prodInfo__price'><span>Price</span><span>$ {product?.price}</span></p>
        <div className='prodInfo__counter'>
          <p>quantity</p>
          <button onClick={handleLess} className='prodInfo__btnless'>-1</button>
          <span>{counter}</span>
          <button onClick={handlePlus} className='prodInfo__btnplus'>+1</button>
        </div>
      </div>
      <button onClick={handleBuy} className='prodInfo__btnbuy'>Add to cart <i className='bx bx-cart'></i></button>
    </article>
  )
}

export default ProdInfo;