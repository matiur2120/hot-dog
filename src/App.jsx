import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import ContentBox from "./components/ContentBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
import { columnsData, topping } from "./data";
import { onDragEnd } from "./utility/utilityFunctions";

const App = () => {
	//Add uinque id with jeson json arry element
	let dataWithId = topping.map(function (item, index) {
		return Object.assign({}, { ...item, id: "id" + index + 1 });
	});
	const [columns, setColumns] = useState(columnsData);
	const [toppingData, setToppingData] = useState(dataWithId);
	const [popUp, setPopUp] = useState(false);
	const [clickTopping, setClickTopping] = useState(true);

	useEffect(() => {
		setColumns({
			...columns,
			"column-1": {
				name: "Topping",
				items: toppingData,
			},
		});
	}, []);
	const loadToppingTwo = () => {
		if (clickTopping) {
			setColumns({
				...columns,
				"column-1": {
					name: "Topping",
					items: toppingData,
				},
			});
		}
		setClickTopping(false);
	};
	const startOver = () => {
		setClickTopping(true);
		setColumns({
			...columns,
			"column-1": {
				name: "Topping",
				items: [],
			},
			"column-2": {
				name: "Discard",
				items: [],
			},
		});
	};
	const orderProduct = columns["column-1"].items;

	const submitOrder = () => {
		setPopUp(true);
	};
	const handleClose = () => {
		setPopUp(false);
	};
	return (
		<div className="main_container">
			<Header
				loadToppingTwo={loadToppingTwo}
				startOver={startOver}
				submitOrder={submitOrder}
			/>
			<DragDropContext
				onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
			>
				<div className="content_box_wrapper">
					{Object.entries(columns).map(([columnId, column], index) => (
						<ContentBox key={index} columnId={columnId} column={column} />
					))}
				</div>
			</DragDropContext>
			<PopUp openPopUp={popUp} handleClose={handleClose} items={orderProduct} />
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default App;
