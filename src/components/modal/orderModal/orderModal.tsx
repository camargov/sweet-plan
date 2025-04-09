"use client";
import Button from "@/components/button/button";
import classes from "./orderModal.module.css";
import { useAuthContext } from "@/context/AuthContext";

type OrderModalProps = {
	onClose: () => void;
};

const OrderModal = (props: OrderModalProps) => {
	const { onClose } = props;

	const user = useAuthContext();

	const handleAddClick = () => {
		// "1AigfxiPt1VTnyR5IUlMZfzMOFq1"
		// uid: "1AigfxiPt1VTnyR5IUlMZfzMOFq1"
		console.log(user?.uid);
	};

	return (
		<div className={classes.container}>
			<Button caption="Close" onClick={onClose} />
			<h1>Order</h1>
			<Button caption="Add" onClick={handleAddClick} />
		</div>
	);
};

export default OrderModal;
