"use client";
import Button from "@/components/button/button";
import classes from "./orderModal.module.css";

type OrderModalProps = {
	onClose: () => void;
};

const OrderModal = (props: OrderModalProps) => {
	const { onClose } = props;

	const handleAddClick = () => {};

	return (
		<div className={classes.container}>
			<Button caption="Close" onClick={onClose} />
			<h1>Order</h1>
			<Button caption="Add" onClick={handleAddClick} />
		</div>
	);
};

export default OrderModal;
