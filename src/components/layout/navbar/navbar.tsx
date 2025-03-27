"use client";
import { useRouter } from "next/navigation";
import Button from "../../button/button";
import Logo from "../../logo/logo";
import classes from "./navbar.module.css";

type NavbarProps = {
	isSignedIn: boolean;
};

const Navbar = (props: NavbarProps) => {
	const { isSignedIn } = props;

	const router = useRouter();

	const handleSignUpClick = () => {
		router.push("/signUp");
	};

	const handleLogInClick = () => {
		router.push("/logIn");
	};

	return (
		<>
			{isSignedIn ? (
				<div className={classes.container}>
					<Logo />
					<div>
						<h3>Orders</h3>
						<h3>Recipes</h3>
						<h3>Schedule</h3>
						{/* Profile Icon */}
						<h3>P</h3>
					</div>
				</div>
			) : (
				<div className={classes.container}>
					<Logo />
					<div className={classes.buttons}>
						<Button caption="Sign up" onClick={handleSignUpClick} />
						<Button caption="Log in" onClick={handleLogInClick} />
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
