import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { CardCharacters } from "../component/cardCharacters";

export const Home = () => {
	const [Peoplelist, setPeopleList] = useState([]);

	let URL = "https://www.swapi.tech/api/";

	async function fnPeopleList() {
		//const result = await fetch(URL + "people/")
		const result = await fetch("https://raw.githubusercontent.com/johmstone/files/main/peopleresponse.json")
			.then(res => {
				if (res.status == 200) {
					return res.json();
				}
			})
			.catch(err => console.error(err));
		setPeopleList(result.results);
	}

	useEffect(() => {
		fnPeopleList();
	}, []);

	// const CardPeoplelist =
	// 	);
	// });

	return (
		<div className="container testimonial-group">
			<div className="row">
				{Peoplelist.map((people, i) => (
					<div className="cardhorizontal" key={i}>
						<CardCharacters PeopleID={people.uid} />
					</div>
				))}
			</div>
		</div>
	);
};
