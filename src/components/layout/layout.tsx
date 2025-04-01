"use client";
import { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";
import Modal from "../modal/Modal";

const SECURE_PATHS = ["/", "/orders", "/schedule", "/recipes"];

const Layout = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();
	const { globalState } = useGlobalContext();
	const { modalOpen } = globalState;

	if (!SECURE_PATHS.includes(pathname)) {
		return <>{children}</>;
	}
	return (
		<>
			<>
				<Navbar />
				<div>{children}</div>
				<Footer />
			</>
			{modalOpen && <Modal type="order" />}
		</>
	);
};

export default Layout;
