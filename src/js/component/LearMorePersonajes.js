import React, {useContext} from "react"; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LearnMore = () => {

    return <div>

            <div className="container-fluid">

                <h1 className="tituloPeople" id = "headerh1" style={{color: "orange"}}><strong>Starwars Blog</strong></h1>
                <div className="container row">
                    <div className="col-4">
                        {
                        store.people?.map((obj, i) => {
                            return <Card_personajes img = {`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`}/> // {i+1} porque empieza en la posición 0, de esta manera el primer personaje empezará en el 1
                        })
                        }                  
                    </div>
                    <div className="col-8">

                    </div>
                    

                </div>

            </div>


    </div>



}