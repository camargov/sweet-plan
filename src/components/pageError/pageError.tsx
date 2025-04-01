"use client";

import { useRouter } from "next/navigation";
import Button from "../button/button";

const PageError = () => {
	const router = useRouter();

	const onReturnHomeClick = () => {
		router.push("/");
	};

	return (
		<div>
			<h3>Page Error</h3>
			<p>
				{
					"You don't have access to this page. To gain access, you can sign up or log in."
				}
			</p>
			<Button caption="Return to home" onClick={onReturnHomeClick} />
		</div>
	);
};

export default PageError;
