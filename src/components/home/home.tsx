"use client";
import ReviewCarousel from "./reviewCarousel/ReviewCarousel";
import classes from "./home.module.css";
import Image from "next/image";

const HomeDisplay = () => {
	return (
		<div>
			<div className={classes.hero}>
				<h1>
					{"For your sweet treats, you'll need a"}
					<span>sweet plan</span>
				</h1>
				<h2>
					Plan your baking business using Sweet Plan, a digital storage for your
					recipes, orders, and schedule all in one seamless location.
				</h2>
			</div>

			<div className={classes.banner}>
				<h2>
					Managing a business is already a heavy load. Let Sweet Plan help and
					ease your mind!
				</h2>
			</div>

			{/* Details about tools */}
			<div>
				{/* Orders*/}
				<div className={classes.toolContainer}>
					<Image
						src="/orders.png"
						alt="Woman kneading dough"
						width={320}
						height={320}
					/>
					<div className={classes.toolText}>
						<h2>Orders</h2>
						<h3>
							Easy way to organize orders and be reminded of deadlines for
							urgent orders
						</h3>
					</div>
				</div>

				{/* Recipes */}
				<div className={classes.toolContainer}>
					<Image
						src="/recipes.png"
						alt="Baking ingredients on a table"
						width={320}
						height={320}
					/>
					<div className={classes.toolText}>
						<h2>Recipes</h2>
						<h3>Flexible storage for your recipes that keeps a history log</h3>
					</div>
				</div>

				{/* Schedule */}
				<div className={classes.toolContainer}>
					<Image
						src="/schedule.png"
						alt="Woman writing in a calendar"
						width={320}
						height={320}
					/>
					<div className={classes.toolText}>
						<h2>Schedule</h2>
						<h3>Keep track of baking tasks in your personalized schedule</h3>
					</div>
				</div>
			</div>

			<div className={classes.reviewContainer}>
				<h2>
					Still not sure about Sweet Plan?
					<br />
					Hear what other bakers have to say
				</h2>
				<ReviewCarousel />
			</div>
		</div>
	);
};

export default HomeDisplay;
