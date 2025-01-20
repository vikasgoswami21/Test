import React,{useEffect, useState} from 'react'
import { setProducts } from '../redux/productSlice'
import { addtoCart } from '../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setApiData } from '../redux/apiSlice'


const ProductList = () => {
    console.log();
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    const apiData = useSelector(state => state.api.apiData)
    
    
    const fetchApiData = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const response = await res.json();
            dispatch(setApiData(response.products)); // Update with fetched data
        } catch (e) {
            console.error('Fetch Products Error -', e);
        }
    };
    
    useEffect(() => {
        fetchApiData();
    }, []);
    
    

    useEffect(() => {
        dispatch(setProducts(apiData))
    }, [])

    const handleAddtoCart=(e, item)=>{
        e.stopPropagation()
        e.preventDefault()
        console.log("product lenght",item);
        dispatch(addtoCart(item))
        console.log("Add to Cart",addtoCart(item));
        // alert("Product Added Successfully!")
    }
    
    
  return (
	<div className="product-section mt-150 mb-150">
        
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div className="row">
                {apiData?.length >0 ?
                    (
                        apiData?.map((item,i)=>{
                            return(
                                <div key={item.id} className="col-lg-3 col-md-3 text-center">
                                    <div className="single-product-item">
                                        <div className="product-image">
                                            <a href="single-product.html"><img src={item.images} alt={item.images} /></a>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p className="product-price"><span>Per Kg</span> {item.price}$ </p>
                                        <a onClick={(e) => handleAddtoCart(e, item)} className="cart-btn"><i className="fa fa-shopping-cart"></i> Add to Cart</a>
                                    </div>
                                </div>
                            )
                        })
                    )
                :
                    <h3>Loading...</h3>
                }
			</div>
		</div>
	</div>   
  )
}

export default ProductList