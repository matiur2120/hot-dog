import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { capitalizeFirstLetter } from "../utility/utilityFunctions";
const useStyles = makeStyles({
	single_content: {
		background: "white",
		margin: "10px 10px",
		textAlign: "center",
		border: "1px solid gray",
		padding: "10px",
		borderRadius: "10px",
		fontSize: "16px",
		backgroundColor: "#FAFAFA",
	},
});

const SingleItem = ({ title, dragId, index }) => {
	const classes = useStyles();
	return (
		<Draggable draggableId={dragId} index={index} key={dragId}>
			{(provided, snapshot) => (
				<h4
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					style={{
						backgroundColor: snapshot.isDragging ? "gray" : "white",
						...provided.draggableProps.style,
					}}
					className={classes.single_content}
				>
					{capitalizeFirstLetter(title)}
				</h4>
			)}
		</Draggable>
	);
};

export default SingleItem;
