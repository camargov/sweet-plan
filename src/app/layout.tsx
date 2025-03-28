import type { Metadata } from "next";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
	title: "Sweet Plan",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AuthContextProvider>
					<Layout>{children}</Layout>
				</AuthContextProvider>
			</body>
		</html>
	);
}
