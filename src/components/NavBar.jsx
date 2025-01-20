import React, { useState, useEffect } from 'react'
import logo from "../img/logo.png"
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setApiData } from '../redux/apiSlice'




const NavBar = ( ) => {

	const dispatch = useDispatch()
	
    const products = useSelector(state=> state.cart.products)

	const [isSearchOpen, setIsSearchOpen] = useState(false)
	

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

  return (
	<div className="top-header-area" id="sticker">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-sm-12 text-center">
					<div className="main-menu-wrap">
						<div className="site-logo">
                            <NavLink to="/">
								<img src={logo} alt={logo} />
							</NavLink>
						</div>
						
                        <nav className="main-menu">
							<ul>
								<li className="current-list-item"><Link to="/">Home</Link>
								</li>
								<li><NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">About</NavLink></li>
								<li><NavLink className={({ isActive }) => (isActive ? "active" : "")}  to="/Cart">Cart</NavLink></li>
								<li><NavLink className={({ isActive }) => (isActive ? "active" : "")}  to="/Checkout">Checkout</NavLink></li>
								<li>
									<div className="header-icons">
                                        <NavLink className={`shopping-cart $({ isActive }) => (isActive ? "active" : "")`}  to="/Cart">
                                            {products.length > 0 && 
                                                <span> {products.length}</span>
                                            }
                                            <i className="fa fa-shopping-cart"></i>
                                        </NavLink>
										<a className="mobile-hide search-bar-icon">
                                            <i className="fa fa-search" onClick={()=>setIsSearchOpen(!isSearchOpen)}></i>
											{isSearchOpen &&
												<div className="searchbar">
													<input type="text" id='searchInput' />
													<i className="fa fa-search"></i>
												</div>
											}
                                        </a>
									</div>
                                    
								</li>
							</ul>
						</nav>
						<a className="mobile-show search-bar-icon">
							<i className="fa fa-search"></i>
							<div className="searchbar">
								<input type="text" id='searchInput' />
								<i className="fa fa-search"></i>
							</div>
						</a>
						<div className="mobile-menu"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default NavBar