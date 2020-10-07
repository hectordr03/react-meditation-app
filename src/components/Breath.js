import React from 'react';
import classes from './Breath.module.css';

const Breath = () => {
	const relaxingBreath = (e) => {
		let counter = 0;
	};
	return (
		<div className={classes.Breath}>
			<h1>Breath component</h1>
			{/* <p className={ classes.message }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
			<div className={classes.boxGroup}>
				{/* Breathing exercises: Box breath */}
				<div className={classes.box1}></div>
				<div className={classes.box2}>
					<h3>Relaxing breath</h3>
				</div>
				<div className={classes.box3}></div>
			</div>
		</div>
	);
};

export default Breath;
