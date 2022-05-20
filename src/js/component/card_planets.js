import React from "react"; 
import { Link } from "react-router-dom";

export const Card_planets = (props) => {

    return <div>

        <div className="card" style={{minWidth: "300px"}} id = "cardsSW">
            <img className="card-img-top" src={props.img} 
            onError ={e =>{e.target = 'https://concepto.de/wp-content/uploads/2014/08/universo-e1551279332781.jpg'; e.target.onError = null;}}

            alt="Card image cap"/>
            <div className="card-body">
                <h4 className="card-title" style={{color: "black"}}><strong>{props.name}</strong></h4>
                <p className="card-text"><strong>Gender:</strong>{" "+props.gender}</p>
                <p className="card-text"><strong>Model:</strong>{" "+props.model}</p>
                <p className="card-text"><strong>Manufacturer:</strong>{" "+props.manufacturer}</p>
                <p className="card-text"><strong>Climate:</strong>{" "+props.climate}</p>


                <Link to ={"/planets/LMplanets/"+ props.ind }>
                    <button className="btn btn-warning">Learn more</button>
                </Link>
                <button className="btn btn-light"><i class="far fa-heart"></i></button>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    </div>


}