import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import Spinner from 'react-bootstrap/Spinner';
import { fetchProducts, STATUSES } from '../store/productSlice';


const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.products);
    // const [products, setProducts] = useState([]);
    useEffect(() => {
        dispatch(fetchProducts())
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     // console.log(data);
        //     setProducts(data);

        // }
        // fetchProducts();
        // eslint-disable-next-line
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product))
    }
    if (status === STATUSES.LOADING) {
        return <p className='text-center my-5'><Spinner animation="border" variant="success" />
        </p>
    }
    if (status === STATUSES.ERROR) {
        return <h4 className='text-danger text-center'>SomeThing Went Wrong....</h4>
    }
    return (
        <div className='container row m-auto'>

            {products.map((product) => (
                <div className='col-md-4 '>
                    <Card className='my-4 m-auto' style={{ width: '18rem' }} key={product.id}>
                        <Card.Img variant="top" src={product.image} height={300} width={250} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text >
                                {product.description.length < 100 ? product.description : product.description.slice(0, 100)}
                                <h3><strong>Price:</strong> {product.price}</h3>
                            </Card.Text>
                            <Button onClick={() => handleAdd(product)} variant="dark">Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}

        </div>
    )
}

export default Product