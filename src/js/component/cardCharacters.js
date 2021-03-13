import React, { Component } from "react";

export const CardCharacters = props => {
	const cardStyle = {
		width: "18rem"
	};

	return (
		<div className="card m-3" style={cardStyle}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text text-wrap">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
};
