"use client";
import { useRouter } from "next/navigation";
import Button from "../../button/button";
import Logo from "../../logo/logo";
import classes from "./navbar.module.css";
import { useAuthContext } from "@/context/AuthContext";

const Navbar = () => {
	const user = useAuthContext();
	const router = useRouter();

	const handleSignUpClick = () => {
		router.push("/signUp");
	};

	const handleLogInClick = () => {
		router.push("/logIn");
	};

	return (
		<>
			{user === null ? (
				<div className={classes.container}>
					<Logo />
					<div className={classes.rightActions}>
						<Button caption="Sign up" onClick={handleSignUpClick} />
						<Button caption="Log in" onClick={handleLogInClick} />
					</div>
				</div>
			) : (
				<div className={classes.container}>
					<Logo />
					<div className={classes.rightActions}>
						<h3>Orders</h3>
						<h3>Recipes</h3>
						<h3>Schedule</h3>
						{/* Profile Icon */}
						<h3>P</h3>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
