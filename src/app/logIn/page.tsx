"use client";

import { logIn } from "@/firebase/auth/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useState, ChangeEvent } from "react";

const Page = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

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

	return (
		<div>
			<h1>Log in</h1>
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
		</div>
	);
};

export default Page;
