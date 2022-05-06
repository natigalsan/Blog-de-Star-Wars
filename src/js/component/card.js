import React from "react"; 
import { Link } from "react-router-dom";

export const Card = (props) => {

    return <div>

    <div className="card" style={{maxWidth: "400px"}}>
            <img className="card-img-top" src={props.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.gender}</p>
                <Link to = "/">
                    <button>Learn more</button>
                </Link>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    </div>


}