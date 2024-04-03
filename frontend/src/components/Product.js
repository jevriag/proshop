import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

/*
    It might have looked like this const Product = (props) => { ...  <a href={`/product/${props.product._id}`}>
    instead I used the structuring by passing in curly braces and take the product directly.
    destructuring expression' is available in ES6
*/
const Product = ({ product }) => {

    return (
           <Card className='my-3 p-3 rounded'>
               <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant='top' />
               </Link>

               <Card.Body>
                   <Link to={`/product/${product._id}`}>
                       <Card.Title as='div'>
                           <strong>
                               {product.name}
                           </strong>
                       </Card.Title>
                   </Link>

                   <Card.Text as='div'>
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                        />
                   </Card.Text>

                   <Card.Text as='h3'>
                        ${product.price}
                   </Card.Text>
               </Card.Body>
           </Card>
    )
};

export default Product;