import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart)

    const handleRemove = (productid) => {
        dispatch(remove(productid))
    }

    return (
        <div className='container'>

            <h1 className='text-center my-5'>Cart Items</h1>

 
            {products.length === 0 ? <h6 className='text-center text-danger'><b>Nothing To Show ! GoTo Home Tab And Add Products To Cart</b></h6> :
                <Table striped className='my-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Image</th>
                            {/* <th>Product Title</th> */}
                            <th>Product Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr>
                                <td><strong>{products.indexOf(product) + 1}</strong></td>
                                <td><img src={product.image} height={50} width={50} alt="Not Found" /></td>
                                {/* <td><h5>{product.title}</h5></td> */}
                                <td><h5>{product.price}</h5></td>
                                <td><Button onClick={() => handleRemove(product.id)} variant="dark">Remove</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }


        </div>
    )
}

export default Cart