"use client";
import { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
