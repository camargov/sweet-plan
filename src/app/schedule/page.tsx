"use client";
import PageError from "@/components/pageError/pageError";
import { useAuthContext } from "@/context/AuthContext";

const Page = () => {
	const user = useAuthContext();

	return (
		<>
			{user === null ? (
				<PageError />
			) : (
				<div>
					<h3>Schedule</h3>
				</div>
			)}
		</>
	);
};

export default Page;
