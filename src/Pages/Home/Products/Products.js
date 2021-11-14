
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://salty-crag-79590.herokuapp.com//products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="py-5">
            <Container>
                <div className="w-100 mx-auto text-center py-3">
                    <h2>Top Products</h2>
                </div>
                {
                    products.length ? <Row xs={1} md={3} className="g-4">
                        {
                            products.slice(0, 6).map(product => <Col key={product?._id}>
                                <Card className="shadow p-3 mb-5 bg-body rounded">
                                    <div className="text-center">
                                        <Card.Img style={{ width: '50%', height: '210px' }} variant="top" src={product?.img} />
                                    </div>
                                    <div className="p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Card.Title>{product?.productName}</Card.Title>
                                        </div>
                                        <p className="p-0 m-0">{product?.des}</p>
                                        <div className="d-flex justify-content-between pt-3">
                                            <h2>$ {product?.price}</h2>
                                            <Link to={`/purchase/${product._id}`}><Button >Order Now</Button></Link>
                                        </div>
                                    </div>
                                </Card>
                                <Link></Link>
                            </Col>)
                        }
                    </Row> : <h2>Loading...</h2>
                }
            </Container>
        </div>
    );
};

export default Products;