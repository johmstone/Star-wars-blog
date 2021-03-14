import React, { Component, useEffect, useState } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

let initialPlanet = {
	properties: {
		diameter: "10465",
		rotation_period: "23",
		orbital_period: "304",
		gravity: "1 standard",
		population: "200000",
		climate: "arid",
		terrain: "desert",
		surface_water: "1",
		created: "2021-03-13T19:54:30.754Z",
		edited: "2021-03-13T19:54:30.754Z",
		name: "Tatooine",
		url: "https://www.swapi.tech/api/planets/1"
	},
	description: "A planet.",
	_id: "5f7254c11b7dfa00041c6fae",
	uid: "1",
	__v: 0
};

export const CardPlanets = props => {
	const cardStyle = {
		width: "20rem"
	};

	const [Planet, setPlanet] = useState(initialPlanet);
	const [Favorite, setFavorite] = useState(false);

	let URL = "https://www.swapi.tech/api/";
	let detailURL = "Planets/details/" + props.PlanetID;

	async function fnPeople() {
		const response = await fetch(URL + "planets/" + props.PlanetID)
			//const response = await fetch("https://raw.githubusercontent.com/johmstone/files/main/JSONResultPlanetDetail.json")
			.then(res => {
				if (res.status == 200) {
					return res.json();
					//console.log(res.json());
				}
			})
			.catch(err => console.error(err));

		setPlanet(response.result);
	}

	useEffect(() => {
		fnPeople();
	}, []);

	const ChangeFavorite = () => {
		if (Favorite) {
			setFavorite(false);
		} else {
			setFavorite(true);
		}
	};
	return (
		<div className="card m-3" style={cardStyle}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{Planet.properties.name}</h5>
				<p className="card-text text-wrap m-0">Climate: {Planet.properties.climate}</p>
				<p className="card-text text-wrap m-0">Terrain: {Planet.properties.terrain}</p>
				<p className="card-text text-wrap m-0">Population: {Planet.properties.population}</p>
				<div className="mt-2">
					<Link to={detailURL} className="btn btn-outline-primary text-primary">
						Learn more!
					</Link>
					<a className="btn btn-outline-warning text-warning float-right" onClick={() => ChangeFavorite()}>
						{Favorite ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
					</a>
				</div>
			</div>
		</div>
	);
};

CardPlanets.propTypes = {
	PlanetID: PropType.string
	// 2) add here the new properties into the proptypes object
};
