"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
	const user = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (user === null) router.push("/");
	}, [user, router]);

	return <h1>Only logged in users can view this page</h1>;
};

export default Page;
