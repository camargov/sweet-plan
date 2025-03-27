"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import classes from "./logo.module.css";

const Logo = () => {
	const router = useRouter();

	const handleClick = () => {
		router.push("/");
	};

	return (
		<div onClick={handleClick} className={classes.container}>
			<Image src="/logo.png" alt="Sweet Plan Logo" width={48} height={48} />
		</div>
	);
};

export default Logo;
