"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";

const Dashboard = () => {
	const user = useAuthContext();

	useEffect(() => {
		console.log(user);
	}, [user]);

	return <div>If you can see this, you are logged in</div>;
};

export default Dashboard;
