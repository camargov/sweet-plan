"use client";
import Image from "next/image";

const Logo = () => {
	return (
		<div>
			<Image src="/logo.png" alt="Sweet Plan Logo" width={48} height={48} />
		</div>
	);
};

export default Logo;
