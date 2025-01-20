import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, incrementQuantity, removeCart } from '../redux/cartSlice';

const Cart = () => {
	const dispatch = useDispatch()
	
	const cart = useSelector(state=> state.cart)
	console.log("Cart",cart);

  return (
	<>
	{ cart.products.length > 0 ?
    <div className="cart-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 col-md-12">
					<div className="cart-table-wrap">
						<table className="cart-table">
							<thead className="cart-table-head">
								<tr className="table-head-row">
									<th className="product-remove"></th>
									<th className="product-image">Product Image</th>
									<th className="product-name">Name</th>
									<th className="product-price">Price</th>
									<th className="product-quantity">Quantity</th>
									<th className="product-total">Total Price</th>
									<th className="product-remove">Remove</th>
								</tr>
							</thead>
							<tbody>
								{cart.products.map((item)=>{
									return(
										//  key={item.id} 
										<tr className="table-body-row">
											<td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
											<td className="product-image"><img src={item.image} alt="" /></td>
											<td className="product-name">{item.title}</td>
											<td className="product-price">{item.price}</td>
											<td className="product-quantity">
												<button onClick={()=> dispatch(decreaseQuantity(item.id))}>-</button>
												<input type="number" value={item.quantity} placeholder="0" />
												<button onClick={()=> dispatch(incrementQuantity(item.id))}>+</button>
											</td>
											<td className="product-total">{item.quantity * item.price}</td>
											<td className='product-remove' onClick={()=>dispatch(removeCart(item.id))}>X</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>

				<div className="col-lg-4">
					<div className="total-section">
						<table className="total-table">
							<thead className="total-table-head">
								<tr className="table-total-row">
									<th>Total</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr className="total-data">
									<td><strong>Total Quanitity: </strong></td>
									<td>{cart.totalQuantity}</td>
								</tr>
								<tr className="total-data">
									<td><strong>Total Price: </strong></td>
									<td>{cart.totalPrice.toFixed(2)}</td>
								</tr>
								<tr className="total-data">
									<td><strong>Shipping: </strong></td>
									<td>$45</td>
								</tr>
								<tr className="total-data">
									<td><strong>Total: </strong></td>
									<td>{(Number(cart.totalPrice) + 45).toFixed(2)}</td>
								</tr>
							</tbody>
						</table>
						<div className="cart-buttons">
							<a href="cart.html" className="boxed-btn">Update Cart</a>
							<a href="checkout.html" className="boxed-btn black">Check Out</a>
						</div>
					</div>

					<div className="coupon-section">
						<h3>Apply Coupon</h3>
						<div className="coupon-form-wrap">
							<form action="index.html">
								<p><input type="text" placeholder="Coupon" /></p>
								<p><input type="submit" value="Apply" /></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>:
	<h1>Cart is empty</h1>
	}
	</>
  )
}

export default Cart