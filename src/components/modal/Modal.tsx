"use client";
import OrderModal from "./orderModal/orderModal";
import classes from "./Modal.module.css";
import { useGlobalContext } from "@/context/GlobalContext";

type ModalProps = {
	type: "order";
};

const Modal = (props: ModalProps) => {
	const { type } = props;

	const { updateGlobalState } = useGlobalContext();

	const handleClose = () => {
		updateGlobalState({ modalOpen: false });
	};

	return (
		<div className={classes.modal}>
			{type === "order" ? <OrderModal onClose={handleClose} /> : <>Modal</>}
		</div>
	);
};

export default Modal;
