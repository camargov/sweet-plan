"use client";
import Button from "@/components/button/button";
import PageError from "@/components/pageError/pageError";
import { useAuthContext } from "@/context/AuthContext";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect, useState } from "react";

const Page = () => {
	const [orders, setOrders] = useState([]);

	const user = useAuthContext();
	const { updateGlobalState } = useGlobalContext();

	useEffect(() => {
		setOrders([]);
	}, []);

	const handleAddOrderClick = () => {
		updateGlobalState({ modalOpen: true });
	};

	return (
		<>
			{user === null ? (
				<PageError />
			) : (
				<div>
					<h1>Orders</h1>
					<Button caption="Add Order" onClick={handleAddOrderClick} />
					<div>
						{orders.length === 0 ? (
							<div>
								<p>You have no orders.</p>
							</div>
						) : (
							orders.map((_, index) => {
								return <p key={index}>Order</p>;
							})
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Page;
