import React, { useState } from 'react';
import './styles/cartProd.css'
import { deleteCartThunk, putCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const CartProd = ({prod}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
       dispatch(deleteCartThunk('/cart', prod.id))
    }

    const handleLess = () => {
      if (prod.quantity > 1) {
        dispatch(putCartThunk(
          '/cart',
          {quantity: prod.quantity - 1},
          prod.id,
        ))
      }
    }

    const handlePlus = () => {
      dispatch(putCartThunk(
        '/cart',
        {quantity: prod.quantity + 1},
        prod.id,
      ))
    }

  return (
    <article className='cartProd'>
        <h3 className='cartProd__title'>{prod.product?.title}</h3>
        <figure className='cartProd__img'>
            <img src={prod.product?.images[0].url} alt="product image" />
        </figure>
        <div className='cartProd__container'>
            <button onClick={handleLess}>-1</button>
            <span>{prod.quantity}</span>
            <button onClick={handlePlus}>+1</button>
        </div>
        <button onClick={handleDelete}>Delete</button>
        <span className='cartProd__price'>Total: $ {prod.product?.price * prod.quantity}</span>
    </article>
  )
}

export default CartProd;