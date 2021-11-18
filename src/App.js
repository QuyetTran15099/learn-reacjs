import React, { useEffect } from "react";
import AlbumFeature from "./features/Album/pages/index";
import { Link, Route, NavLink, Switch, Redirect } from "react-router-dom";
import TodoFeature from "./features/Todo/pages/index";
import "./App.css";
import productApi from "./api/productApi";
function App() {
	useEffect(() => {
		const fetchProducts = async () => {
			const params = {
				_limit: 10,
			};
			const productList = await productApi.getAll(params);
			console.log(productList);
		};
		fetchProducts();
	}, []);
	return (
		<div className="App">
			homepage
			<p>
				<Link to="/albums">Albums</Link>
			</p>
			<p>
				<Link to="/todos">Todos</Link>
			</p>
			<Switch>
				<Redirect from="/home" to="/todos" exact></Redirect>
				<Route path="/" component={TodoFeature} exact />
				{/* <Route path="/todos" component={TodoFeature} /> */}
				<Route path="/albums" component={AlbumFeature} />
			</Switch>
			<p>
				<NavLink to="/todos" activeclassname="active">
					Todos with Navlink
				</NavLink>
			</p>
			<p>
				<NavLink to="/albums">Albums with Navlink</NavLink>
			</p>
			footer
		</div>
	);
}

export default App;
