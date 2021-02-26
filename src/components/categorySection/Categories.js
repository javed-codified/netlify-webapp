import React from 'react'
import {useEffect,useState,Component} from 'react';
import {Layout, Menu, Spin} from 'antd';
import {Link} from 'react-router-dom';
import {getCategories} from "../../../src/remote/woocommerce";

const Categories = () => {

    const [product,setProduct ] = useState()

    useEffect(() => {
        getCategories().then(response=>{
            setProduct(response.data)
            console.log(response.data[1]);
        })

        
    }, [])

    return (
        <div>
            <h1>This is feature Brand component</h1>
              <h2>  </h2>
        </div>
    )
}

export default Categories
