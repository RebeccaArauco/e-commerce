import React from 'react';
import './styles/purchaseCard.css'

const PurchaseCard = ({prod}) => {

  console.log(prod)
  return (
    <article className='purchaseCard'>
      <h3 className='purchaseCard__title'>{prod.product?.title}</h3>
      <figure className='purchaseCard__img'>
        <img src={prod.product.images[0].url} alt="product image" />
      </figure>
      <p className='purchaseCard__date'>{prod.updatedAt?.slice(0, 10)}</p>
      <span className='purchaseCard__quantity'>{prod.quantity}</span>
      <span className='purchaseCard__price'>Total price: $ {prod.product?.price * prod.quantity}</span>
    </article>
  
  )
}

export default PurchaseCard;