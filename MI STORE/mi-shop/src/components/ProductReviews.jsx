import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../styles/ProductReviews.css'
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
      {productReviews.map((item,index)=>(
        <ProductReviewCard key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} index={index} />
      ))}
    </div>
  )
}

export default ProductReviews
