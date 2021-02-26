import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ProductList from '../components/productCard/ProductList';

const Shopping = (props) => {

    


    return (
        <Row>
            <Col span={14}>
                <ProductList {...props} />
            </Col>

            {/* <Col span={10}>

                <ShoppingCart/>

            </Col> */}
        </Row>
    );
};

export default Shopping;