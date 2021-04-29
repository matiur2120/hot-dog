import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import SingleItem from "./SingleItem";
const useStyles = makeStyles((theme) => ({
	content_box: {
		width: "100%",
		minHeight: "500px",
		margin: "20px",
		background: "#FAFAFA",
		border: "1px solid gray",
		borderRadius: "20px",
		"&>h2": {
			textAlign: "center",
			padding: "10px 0",
		},
	},
	item_box: {
		width: "100%",
		padding: "10px",
		borderRadius: "10px",
		height: "430px",
		boxSizing: "border-box",
		overflowY: "scroll",
	},
	item_list: {
		padding: "10 10px",
		// overflowY: "scroll",
	},
}));

const ContentBox = ({ columnId, column }) => {
	const classes = useStyles();
	return (
		<div className={classes.content_box}>
			<h2>{column.name}</h2>
			<div className={classes.item_box}>
				<Droppable droppableId={columnId}>
					{(provided, snapshot) => (
						<div
							className={classes.item_list}
							{...provided.droppableProps}
							ref={provided.innerRef}
							style={{
								backgroundColor: snapshot.isDraggingOver
									? "#81ecec"
									: "#FAFAFA",
							}}
						>
							{column.items.map((item, index) => (
								<SingleItem
									title={item.content}
									key={item.id}
									dragId={item.id}
									index={index}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		</div>
	);
};

export default ContentBox;
