"use client";
import ListItem from "@/components/listItem/listItem";
import RecipeCard from "@/components/recipeCard/recipeCard";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import classes from "./dashboard.module.css";

const Dashboard = () => {
	const [orders, setOrders] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [recipes, setRecipes] = useState([]);

	const user = useAuthContext();

	useEffect(() => {
		console.log(user);
		setOrders([]);
		setTasks([]);
		setRecipes([]);
	}, [user]);

	return (
		<div>
			<h1>Hello User</h1>

			<div className={classes.content}>
				<div className={classes.topContainer}>
					<div>
						<h3>Orders Due Soon</h3>
						<div>
							{orders.length === 0 ? (
								<div>
									<p>You have no orders.</p>
								</div>
							) : (
								orders.map((_, index) => {
									return <ListItem key={index} />;
								})
							)}
						</div>
					</div>
					<div>
						<h3>Upcoming Tasks</h3>
						<div>
							{tasks.length === 0 ? (
								<div>
									<p>You have no tasks.</p>
								</div>
							) : (
								tasks.map((_, index) => {
									return <ListItem key={index} />;
								})
							)}
						</div>
					</div>
				</div>

				<div className={classes.bottomContainer}>
					<h3>Recently Viewed Recipes</h3>
					<div>
						{recipes.length === 0 ? (
							<div>
								<p>You have no current recipes.</p>
							</div>
						) : (
							recipes.map((_, index) => {
								return <RecipeCard key={index} />;
							})
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
