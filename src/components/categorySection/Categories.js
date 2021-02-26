import React from 'react'
import {useEffect,useState,Component} from 'react';
import {Layout, Menu, Spin} from 'antd';
import {Link} from 'react-router-dom';
import {getCategories} from "../../../src/remote/woocommerce";

const Categories = () => {

    const [product,setProduct ] = useState([]);

    useEffect(() => {
        getCategories().then(response=>{
            console.log(response.data);
            setProduct(response.data);
        })


    }, [])


    return (

         <div>
             {
                 product.map((category)=>{
                     return(
                         <>
                         {category.name}
                         </>
                     )
                 })
             }
         </div>
    )
}

export default Categories
