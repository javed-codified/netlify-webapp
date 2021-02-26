import React from 'react';
import {Row, Col} from 'antd';
import ShoppingCart from '../components/shoppingCart/ShopingCart';
import ProductList from '../components/productCard/ProductList';

const Shopping = (props) => {
    return (
        <Row>
            <Col>
                <ProductList {...props} />
            </Col>

            {/* <Col span={10}>

                <ShoppingCart/>

            </Col> */}
        </Row>
    );
};

export default Shopping;