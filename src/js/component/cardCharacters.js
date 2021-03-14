import React, { Component, useEffect, useState } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

let initialPeople = {
	properties: {
		height: "172",
		mass: "77",
		hair_color: "blond",
		skin_color: "fair",
		eye_color: "blue",
		birth_year: "19BBY",
		gender: "male",
		created: "2021 - 03 - 12T19: 25: 06.429Z",
		edited: "2021 - 03 - 12T19: 25: 06.429Z",
		name: "Luke Skywalker",
		homeworld: "https://www.swapi.tech/api/planets/1",
		url: "https://www.swapi.tech/api/people/1"
	},
	description: "A person within the Star Wars universe",
	_id: "5f63a36eee9fd7000499be42",
	uid: "1",
	__v: 0
};

export const CardCharacters = props => {
	const cardStyle = {
		width: "18rem"
	};

	const [People, setPeople] = useState(initialPeople);
	const [Favorite, setFavorite] = useState(false);

	let URL = "https://www.swapi.tech/api/";
	let detailURL = "People/details/" + props.PeopleID;

	async function fnPeople() {
		//const response = await fetch(URL + "people/" + props.PeopleID)
		 const response = await fetch(
		/ 	"https://raw.githubusercontent.com/johmstone/files/main/JSONResultPeopleDetail.json"
		 )
			.then(res => {
				if (res.status == 200) {
					return res.json();
					//console.log(res.json());
				}
			})
			.catch(err => console.error(err));

		setPeople(response.result);
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
				<h5 className="card-title">{People.properties.name}</h5>
				<p className="card-text text-wrap m-0">Gender: {People.properties.gender}</p>
				<p className="card-text text-wrap m-0">Hair Color: {People.properties.hair_color}</p>
				<p className="card-text text-wrap m-0">Eye-Color: {People.properties.eye_color}</p>
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

CardCharacters.propTypes = {
	PeopleID: PropType.string
	// 2) add here the new properties into the proptypes object
};
