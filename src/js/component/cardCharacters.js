import React, { Component, useEffect, useState } from "react";
import PropType from "prop-types";

export const CardCharacters = props => {
	const cardStyle = {
		width: "18rem"
	};

	return (
		<div className="card m-3" style={cardStyle}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.Info.name}</h5>
				<p className="card-text text-wrap">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	);
};

CardCharacters.propTypes = {
	Info: PropType.object
	// 2) add here the new properties into the proptypes object
};
