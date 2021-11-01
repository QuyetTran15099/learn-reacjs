import React from "react";
// import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album/pages/index";
import { Route } from "react-router-dom";
import TodoFeature from "./features/Todo/pages/index";

function App() {
	return (
		<div className="App">
			{/* <TodoFeature /> */}
			<AlbumFeature />
			{/* <Route path="todos" component={TodoFeature} /> */}
			{/* <Route path="ablums" component={AlbumFeature}/> */}
		</div>
	);
}

export default App;
