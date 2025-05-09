import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';


const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    const [latestProducts, setLatestProducts] = useState()


    useEffect(()=> {
        setLatestProducts(products.slice(0,10))
    },[products])

  return (
    <div className='my-10'>
      
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs md:text-base text-gray-600'>
            Discover our latest collection of exclusive products, carefully
            curated to bring you the best in style and quality. Stay ahead 
            of the trends with our new arrivals, designed to elevate your 
            wardrobe and enhance your lifestyle.
        </p>
      </div>

      {/* Rendering Products */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts && latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>

    </div>
  )
}

export default LatestCollection
