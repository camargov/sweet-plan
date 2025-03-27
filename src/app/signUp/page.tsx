"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { signUp } from "../../firebase/auth/auth";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import Button from "@/components/button/button";
import { logInUsingGoogle } from "@/firebase/auth/googleAuth";

const Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleBackClick = () => {
		router.push("/");
	};

	const handleSignUpWithGoogleClick = async () => {
		const result = await logInUsingGoogle();
		console.log(result);
		router.push("/dashboard");
	};

	const handleForm = async (event: FormEvent) => {
		event.preventDefault();

		const { result, error } = await signUp(email, password);

		if (error) {
			return console.log(error);
		}

		console.log(result);
		return router.push("/dashboard");
	};

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event?.target?.value) {
			setEmail(event.target.value);
		}
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event?.target?.value) {
			setPassword(event.target.value);
		}
	};

	const handleLogInClick = () => {
		router.push("/logIn");
	};

	return (
		<div>
			<Button caption="Back to home" onClick={handleBackClick} />
			<div className={styles.container}>
				<h1>Sign up</h1>
				<Button
					caption="Sign up with Google"
					onClick={handleSignUpWithGoogleClick}
				/>
				<div>
					<p>or using email</p>
				</div>
				<form onSubmit={handleForm}>
					<label htmlFor="email">
						<p>Email</p>
						<input
							onChange={handleEmailChange}
							required
							type="email"
							name="email"
							id="email"
							placeholder="example@email.com"
						/>
					</label>
					<label htmlFor="password">
						<p>Password</p>
						<input
							onChange={handlePasswordChange}
							required
							type="password"
							name="password"
							id="password"
							placeholder="password"
						/>
					</label>
					<button type="submit">Sign up</button>
				</form>
				<div className={styles.secondAction}>
					<p>Already have an account?</p>
					<Button caption="Log in" onClick={handleLogInClick} />
				</div>
			</div>
		</div>
	);
};

export default Page;
