import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
const useStyles = makeStyles((theme) => ({
	footer_container: {
		display: "flex",
		padding: "20px 30px",
		justifyContent: "flex-end",
		"& .MuiButton-containedPrimary": {
			width: "30%",
		},
		"& .MuiButton-label": {
			textTransform: "none",
		},
	},
}));

const Footer = () => {
	// const [state, dispatch] = useStateValue();
	const [{ user }, dispatch] = useStateValue();
	const classes = useStyles();
	const singInWithGoogle = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className={classes.footer_container}>
			{user ? (
				<Avatar src={user.photoURL} />
			) : (
				<div onClick={singInWithGoogle} style={{ cursor: "pointer" }}>
					<Avatar src="/broken-image.jpg" />
				</div>
			)}
		</div>
	);
};

export default Footer;
