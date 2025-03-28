"use client";

import Button from "@/components/button/button";
import PageError from "@/components/pageError/pageError";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";

const Page = () => {
	const [recipes, setRecipes] = useState([]);

	const user = useAuthContext();

	useEffect(() => {
		setRecipes([]);
	}, []);

	const handleAddRecipeClick = () => {};

	return (
		<>
			{user === null ? (
				<PageError />
			) : (
				<div>
					<h1>Recipes</h1>
					<Button caption="Add recipe" onClick={handleAddRecipeClick} />
					<div>
						{recipes.length === 0 ? (
							<div>
								<p>You have no recipes</p>
							</div>
						) : (
							recipes.map((_, index) => {
								return <p key={index}>Recipe</p>;
							})
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Page;
