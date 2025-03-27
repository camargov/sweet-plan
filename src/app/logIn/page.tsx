"use client";
import Button from "@/components/button/button";
import { logIn } from "@/firebase/auth/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useState, ChangeEvent } from "react";
import styles from "./styles.module.css";
import { logInUsingGoogle } from "@/firebase/auth/googleAuth";

const Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleBackClick = () => {
		router.push("/");
	};

	const handleLogInWithGoogle = async () => {
		const result = await logInUsingGoogle();
		console.log(result);
		router.push("/dashboard");
	};

	const handleForm = async (event: FormEvent) => {
		event.preventDefault();

		const { result, error } = await logIn(email, password);

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

	const handleSignUpClick = () => {
		router.push("/signUp");
	};

	return (
		<div>
			<Button caption="Back to home" onClick={handleBackClick} />
			<div className={styles.container}>
				<h1>Log in</h1>
				<Button caption="Log in with Google" onClick={handleLogInWithGoogle} />
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
					<button type="submit">Log in</button>
				</form>

				<div className={styles.secondAction}>
					<p>{"Don't have an account?"}</p>
					<Button caption="Sign up" onClick={handleSignUpClick} />
				</div>
			</div>
		</div>
	);
};

export default Page;
