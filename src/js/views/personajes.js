import React, {useContext} from "react"; 
import { Link } from "react-router-dom";
import {Card_personajes} from "../component/card_personajes";
import { Context } from "../store/appContext";

export const Personajes = () => {

    const {store, action} = useContext (Context); 

    return <div>
        <div className="container-fluid">

            {/*para visualizar mi componente CARD he de llamarla dentro de personajes.js: <Card  key....i...store...tal tal tal ver video/>*/}
            {/*y despues crear un fech que me genere el contenido de las card y luego con las card ponerle los atributos, ver videos: */}
            <div className="headerPersonajes" id = "headerPersonajes">
                    <h1 className="tituloPeople" id = "headerh1" style={{color: "orange"}}><strong>Personajes Star Wars</strong></h1>
                    <h5 style={{color: "white"}}>"Entrénate a tí mismo para dejar ir todo aquello que temes perder" - Yoda</h5>
            </div>
            <div className="container-fluid" style = {{overflow: "scroll"}}>
                <div className="posicionCard" >
                {
                    store.people?.map((obj, i) => {
                        return <Card_personajes name = {obj.name} gender ={obj.gender} i ={i} img = {`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`}/> // {i+1} porque empieza en la posición 0, de esta manera el primer personaje empezará en el 1
                    })
                }
                </div>
            </div>
        
            
        

        </div>
        
       
        


    </div>

    
}