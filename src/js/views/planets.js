import React, {useContext} from "react"; 
import { Link } from "react-router-dom";
import {Card_planets} from "../component/card_planets";
import { Context } from "../store/appContext";

export const Planets = () => {
    const {store, action} = useContext (Context); 

    return <div>
        <div className="container-fluid">
            <div className="headerPersonajes" id = "headerPersonajes">
                    <h1 className="tituloPeople" id = "headerh1" style={{color: "orange"}}><strong>Planetas Star Wars</strong></h1>
                    <h5 style={{color: "white"}}>"Entrénate a tí mismo para dejar ir todo aquello que temes perder" - Yoda</h5>
            </div>
        </div>
        <div className="container-fluid" style = {{overflow: "scroll"}}>
                 <div className="posicionCard" >
                {
                    store.planets?.map((obx, ind) => {
                        return <Card_planets name = {obx.name} climate ={obx.climate} gravity ={obx.gravity} ind ={ind} img = {`https://starwars-visualguide.com/assets/img/planets/${ind+1}.jpg`}/> // {i+1} porque empieza en la posición 0, de esta manera el primer personaje empezará en el 1
                    })
                }
                </div>

        </div>




    </div>

}