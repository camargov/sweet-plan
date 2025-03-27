"use client";
import Logo from "../../logo/logo";
import classes from "./footer.module.css";

const Footer = () => {
	return (
		<div className={classes.container}>
			<Logo />
			<h3>Sweet Plan</h3>
		</div>
	);
};

export default Footer;
