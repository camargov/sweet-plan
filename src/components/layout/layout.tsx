"use client";
import { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { usePathname } from "next/navigation";

const SECURE_PATHS = ["/", "/orders", "/schedule", "/recipes"];

const Layout = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();

	if (!SECURE_PATHS.includes(pathname)) {
		return <>{children}</>;
	}
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
