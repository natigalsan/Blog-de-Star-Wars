import React from "react"; 
import { Link } from "react-router-dom";
import {Card} from "../component/card.js";
import { Context } from "../store/appContext";

export const Personajes = () => {

    const {store, action} = useContext (Context); 

    return <div>
        
        {/*para visualizar mi componente CARD he de llamarla dentro de personajes.js: <Card  key....i...store...tal tal tal ver video/>*/}
        {/*y despues crear un fech que me genere el contenido de las card y luego con las card ponerle los atributos, ver videos: */}
        <h1 className="tituloPeople">Starwars Blog</h1>
        <p>"Entrénate a tí mismo para dejar ir todo aquello que temes perder" - Yoda</p>
        
        {
            store.people?.map((obj, i) => {
                return <Card name = {obj.name} gender ={obj.gender} i ={i}/>
            })
        }
        


    </div>

    
}