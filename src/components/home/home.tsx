"use client";
import { useAuthContext } from "@/context/AuthContext";
import HomeDisplay from "./homeDisplay/homeDisplay";
import Dashboard from "./homeDashboard/dashboard";

const SweetPlanHome = () => {
	const user = useAuthContext();

	return <>{user === null ? <HomeDisplay /> : <Dashboard />}</>;
};

export default SweetPlanHome;
