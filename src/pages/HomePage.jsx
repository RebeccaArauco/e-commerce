import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProdCard from '../components/homePage/ProdCard';
import './styles/homePage.css'
import FilterPrice from '../components/homePage/FilterPrice';
import FilterCategory from '../components/homePage/FilterCategory';

const body = document.querySelector('body');

const HomePage = () => {

  const [prodCategory, setProdCategory] = useState('');

  const [prodPrice, setProdPrice] = useState({
    from: 0,
    to: Infinity
  });

  const [prodName, setProdName] = useState('');
  const [products, getProducts] = useFetch();

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
    getProducts(url)
  }, []);

  const textInput = useRef ();

  const handleChange = () => {
    setProdName(textInput.current.value.toLowerCase().trim());
  }
 
  const prodFilters = (prod) => {
    const perName = prod.title.toLowerCase().includes(prodName);
    const perPrice = +prod.price <= +prodPrice.to && +prod.price >= +prodPrice.from;
    const perCategory = prodCategory? prod.categoryId === +prodCategory : prod;
    return perName && perPrice && perCategory;
  } 
  
  const handleDark = () => {
      body.classList.toggle('dark');
  }

  return (
    <div className='homePage'>
      <div className='homePage__filters'>
        <div className='homePage__filtername'>
        <input ref={textInput} onChange={handleChange} type="text" />
        <button className='homePage__search'><i class='bx bx-search'></i></button>
        </div>
        <FilterPrice
          setProdPrice={setProdPrice}
        />
        <FilterCategory
          setProdCategory={setProdCategory}
        />
        <button className='homePage__btn' onClick={handleDark}> mode</button>
      </div>

         <div className='homePage__container'>
          {
            products?.filter(prodFilters).map((prod) => (
              <ProdCard
                key={prod.id}
                prod={prod}
              />
            ))
          }
         </div>
    </div>
  )
}

export default HomePage;