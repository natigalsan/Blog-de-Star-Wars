import React from "react"; 
import { Link } from "react-router-dom";

export const Card = (props) => {

    return <div>

        <div className="card" style={{minWidth: "300px"}} id = "cardsSW">
            <img className="card-img-top" src={props.img} 
            // onError ={e =>{e.target}}

            alt="Card image cap"/>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-text"><strong>Gender:</strong>{" "+props.gender}</p>
                <p className="card-text"><strong>Model:</strong>{" "+props.model}</p>
                <p className="card-text"><strong>Manufacturer:</strong>{" "+props.manufacturer}</p>
                <p className="card-text"><strong>Climate:</strong>{" "+props.climate}</p>
                <p className="card-text"><strong>Gravity:</strong>{" "+props.gravity}</p>
                <p className="card-text"><strong>Gender:</strong>{props.climate}</p>


                <Link to = "/">
                    <button className="btn btn-primary">Learn more</button>
                </Link>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    </div>


}