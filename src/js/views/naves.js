import React, {useContext} from "react"; 
import { Link } from "react-router-dom";
import {Card} from "../component/card.js";
import { Context } from "../store/appContext";
import uno from "../../img/1sand_crawler.jpg";
import dos from "../../img/2T-16.jpg";
import tres from "../../img/3X-34.jpg";

export const Naves = () => {
    let fotos = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez]
    const {store, action} = useContext (Context); 
    return <div>

        <div className="headerPersonajes" id = "headerPersonajes">
            <h1 className="tituloPeople" id = "headerh1"><strong>Starwars Blog</strong></h1>
            <h5>"Entrénate a tí mismo para dejar ir todo aquello que temes perder" - Yoda</h5>
        </div>
       
        <div className="posicionCard" style = {{overflow: "scroll"}}>
            {
                store.vehicles?.map((objeto, index) => {
                    return <Card name = {objeto.name} gender ={objeto.gender} i ={index} img = {fotos[index]}/> 
                })
            }
        </div>
        




    </div>

}