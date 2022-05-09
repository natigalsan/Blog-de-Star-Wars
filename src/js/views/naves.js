import React, {useContext} from "react"; 
import { Link } from "react-router-dom";
import {Card_naves} from "../component/card_naves.js";
import { Context } from "../store/appContext";
import uno from "../../img/img SW/1sand_crawler.jpg";
import dos from "../../img/img SW/2T-16.jpg";
import tres from "../../img/img SW/3X-34.jpg";
import cuatro from "../../img/img SW/4TIE_LN.jpg";
import cinco from "../../img/img SW/5snowspeeder.jpg";
import seis from "../../img/img SW/6TIE_bomber.jpg";
import siete from "../../img/img SW/7AT_AT.jpg";
import ocho from "../../img/img SW/8AT_ST.jpg";
import nueve from "../../img/img SW/9Storm_IV.jpg";
import diez from "../../img/img SW/10Sall_barge.jpg";


export const Naves = () => {
    let fotos = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez]
    const {store, action} = useContext (Context); 
    return <div>
        <div className="container-fluid">
            <div className="headerPersonajes" id = "headerPersonajes">
                <h1 className="tituloPeople" id = "headerh1" style={{color: "orange"}}><strong>Naves Star Wars </strong></h1>
                <h5 style={{color: "white"}}>"Entrénate a tí mismo para dejar ir todo aquello que temes perder" - Yoda</h5>
            </div>
        </div>
        <div className="container-fluid" style = {{overflow: "scroll"}}>
             <div className="posicionCard" >
            {
                store.vehicles?.map((objeto, index) => {
                    return <Card_naves name = {objeto.name} model ={objeto.model} manufacturer = {objeto.manufacturer} i ={index} img = {fotos[index]}/> 
                })
            }
             </div>

        </div>

       
       
       
        




    </div>

}