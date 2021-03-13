import React, { useState, useEffect }  from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { CardCharacters } from "../component/cardCharacters";


export const Home = () => {
    const [Peoplelist, setPeopleList] = useState([]);

    let URL = "https://www.swapi.tech/api/";

    async function fnPeopleList() {
        const result = await fetch("https://www.swapi.tech/api/people/1")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPeopleList(data);
            })
            .catch(err => console.error(err));
    }

    useEffect({
        fnPeopleList();
    },[])    

    const CardCharactersList = Peoplelist.map((people,i) => {
        return (
            <div className="carhorizontal">
                <CardCharacters />
            </div>
        );
    });


    return (
        <div className="container testimonial-group">
            <div className="row">
                <CardCharactersList />
            </div>
        </div>
    );
};
