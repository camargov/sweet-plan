"use client";

type ButtonProps = {
	caption: string;
	onClick: () => void;
};

const Button = (props: ButtonProps) => {
	const { caption, onClick } = props;

	return <button onClick={onClick}>{caption}</button>;
};

export default Button;
