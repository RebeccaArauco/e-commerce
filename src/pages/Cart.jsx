import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk, setCart } from '../store/slices/cart.slice';
import CartProd from '../components/cart/CartProd';
import './styles/cart.css'
import { postPurchasesThunk } from '../store/slices/purchases.slice';


const Cart = () => {

  const cart = useSelector(store => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getCartThunk('/cart'));
  }, []);
  
 const handleBuy = () => {
    dispatch(postPurchasesThunk(''));
    dispatch(setCart([]));
 }

  return (
    <>
    <div className='cart__title'><h1>My cart</h1></div>
    <div className='cart'>
        {
          cart?.map(prod => (
            <CartProd
              key={prod.id}
              prod={prod}
            />
          ))
        } 
      </div>
      <div className='cart__totals'>
        <div className='cart__totalsInfo'>
        <p>Total Products: {cart?.reduce((ca, pr) => {
          return ca + pr.quantity; 
        }, 0)}</p>
        <p>Total Price: $ {cart?.reduce((ca, pr) => {
          return ca + pr.quantity * pr.product?.price;
        }, 0)}</p>
        </div>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </>
  )
}

export default Cart;