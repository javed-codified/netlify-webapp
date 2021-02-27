import React,{useState} from 'react'
import SingleProductPage from './SingleProductPage';

const SingleProduct = (props) => {

    return (
        <div>
           <SingleProductPage {...props} />
        </div>
    )
}

export default SingleProduct
