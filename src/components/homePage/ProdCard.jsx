import React from 'react';
import './styles/prodCard.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postCartThunk } from '../../store/slices/cart.slice';
import 'boxicons/css/boxicons.min.css';


const ProdCard = ({prod}) => {

    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const handleView = () => {
        navigate (`/product/${prod.id}`)

    }

    const handleBuy = () => {
        dispatch(postCartThunk('/cart', {
            quantity: 1,
            productId: prod.id,
        }));
    }

  return (
    <article className='prodCard'>
        <figure className='prodCard__img'>
            <img className='prodCard__img-1' src={prod.images[0].url} alt="product image" />
            <img className='prodCard__img-2' src={prod.images[1].url} alt="product image" />
        </figure>
        <hr />
        <ul className='prodCard__list'>
            <li className='prodCard__item'><span>{prod.brand}</span><span>{prod.title}</span></li>
            <li className='prodCard__item'><span>Price: </span><span>$ {prod.price}</span></li>
        </ul>
        <div className='prodCard__buttons'>
            <button onClick={handleView}>View details</button>
            <button className='prodCard__btnBuy' onClick={handleBuy}><i className='bx bx-cart'></i></button>
        </div>
    </article>
  )
}

export default ProdCard;