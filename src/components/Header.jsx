import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GetHotDogTopping from "./GetHotDogTopping";
import HotDogTopping from "./HotDogTopping";
const useStyles = makeStyles((theme) => ({
	header_containr: {
		display: "flex",
		justifyContent: "space-between",
		padding: "20px",
	},
	header_left: {
		display: "flex",
		flex: 0.8,
		flexDirection: "column",
		marginRight: "100px",
	},
	header_right: {
		display: "flex",
		flex: 0.2,
		marginTop: "30px",
		flexDirection: "column",
		"& > .MuiButton-root": {
			marginBottom: "20px",
			textTransform: "none",
		},
	},
}));

const Header = ({ loadToppingTwo, startOver, submitOrder }) => {
	const classes = useStyles();
	return (
		<div className={classes.header_containr}>
			<div className={classes.header_left}>
				<HotDogTopping title="Hot Dog Topping" />
				<GetHotDogTopping title="Get hot dog topping" />
			</div>
			<div className={classes.header_right}>
				<Button variant="outlined" color="primary" onClick={loadToppingTwo}>
					Topping
				</Button>
				<Button variant="outlined" color="secondary" onClick={startOver}>
					Start Over
				</Button>
				<Button variant="contained" color="primary" onClick={submitOrder}>
					Submit Order
				</Button>
			</div>
		</div>
	);
};

export default Header;
