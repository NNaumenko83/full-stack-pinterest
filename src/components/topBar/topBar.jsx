import React from "react";
import "./topBar.css";
import UserButton from "../userButton/userButton";

const TopBar = () => {
	return (
		<div className="topBar">
			{/* SEARCH */}
			<div className="search">
				<img src="/general/search.svg" alt="" className="" />
				<input type="text" className="" placeholder="Search" />
			</div>
			{/* USER */}
			<UserButton />
		</div>
	);
};

export default TopBar;
