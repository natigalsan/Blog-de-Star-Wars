import React, {useContext}from "react";
import { Link } from "react-router-dom";
import {Personajes} from "../views/personajes.js";
import {Context} from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3" id = "navbar">
			
			<Link to="/">
				<img className="starwars" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png" alt="icono star wars" style = {{width: "100px", height: "70px", marginLeft: "20px"}}/>
				
				{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
			</Link>
				{/*estos link son para personajes + naves + planetas*/} 
				<Link to = "/personajes">
					<span className="personajesSW" id ="headernb">Personajes</span>
				</Link>
				<Link to = "/naves">
					<span className="navesSW" id ="headernb">Naves</span>
				</Link>
				<Link to = "/planets">
					<span className="planetasSW" id ="headernb">Planetas</span>
				</Link>

			{/*Este link es para los FAVORITOS AUNQUE HE DE MODIFICAR A DONDE DEBE IR: */}			
			<div class="btn-group dropstart">
				<button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Dropstart
				</button>
				<ul class="dropdown-menu">
					<span>{store.favP.length ==0 ? "Sin favoritos": 
					store.favP.map((name, i) => {
						return <ul>
							<li key={i}>{name}<button onClick={()=>{
								{actions.deleteFavP(name)}
							}}>delete</button></li>
						</ul>
					}) 					
					}</span>
					<span>{store.favnaves.length ==0 ? "": 
					store.favnaves.map((name, index) => {
						return <ul>
							<li key={index}>{name}<button>delete</button></li>
						</ul>
					}) 					
					}</span>

					<span>{store.favpl.length ==0 ? "": 
					store.favpl.map((name, ind) => {
						return <ul>
							<li key={ind}>{name}<button>delete</button></li>
						</ul>
					}) 					
					}</span>
					
				</ul>
			</div>
		</nav>
	);
};
