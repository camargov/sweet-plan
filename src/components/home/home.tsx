"use client";

import { logInUsingGoogle } from "@/firebase/auth/googleAuth";
import { useRouter } from "next/navigation";

const HomeDisplay = () => {
	const router = useRouter();

	const handleLogInClick = () => {
		router.push("/logIn");
	};

	const handleLogInWithGoogleClick = async () => {
		const result = await logInUsingGoogle();
		console.log(result);
		router.push("/dashboard");
	};

	const handleSignUpClick = () => {
		router.push("/signUp");
	};

	return (
		<div>
			<button onClick={handleLogInClick}>Log in</button>
			<button onClick={handleSignUpClick}>Sign up</button>
			<button onClick={handleLogInWithGoogleClick}>Log in using Google</button>
		</div>
	);
};

export default HomeDisplay;
