import React from "react"; 
import { Link } from "react-router-dom";

export const Card_personajes = (props) => {

    return <div>

        <div className="card" style={{minWidth: "300px"}} id = "cardsSW">
            <img className="card-img-top" src={props.img} 
            // onError ={e =>{e.target}}

            alt="Card image cap"/>
            <div className="card-body">
                <h4 className="card-title" style={{color: "blue"}}>{props.name}</h4>
                <p className="card-text"><strong>Gender:</strong>{" "+props.gender}</p>


                <Link to = {"/personajes/learnMorePj/"+ props.i}>
                    <button className="btn btn-primary">Learn more</button>
                </Link>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    </div>


}