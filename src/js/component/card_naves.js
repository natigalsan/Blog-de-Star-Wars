import React, {useContext} from "react"; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card_naves = (props) => {
    const {store, actions} = useContext(Context);

    return <div>

        <div className="card" style={{minWidth: "300px"}} id = "cardsSW">
            <img className="card-img-top" src={props.img} 
            // onError ={e =>{e.target}}

            alt="Card image cap"/>
            <div className="card-body">
                <h4 className="card-title" style={{color: "black"}}><strong>{props.name}</strong></h4>
                <p className="card-text"><strong>Model:</strong>{" "+props.model}</p>
                <p className="card-text"><strong>Manufacturer:</strong>{" "+props.manufacturer}</p>
                <p className="card-text"><strong>Length:</strong>{" "+props.length}</p>


                <Link to = {"/naves/LMnaves/"+ props.index}>
                    <button className="btn btn-warning"
                    onClick={()=>{

                    }}
                    >Learn more</button>
                </Link>
                <button className="btn btn-light"><i class="far fa-heart"></i></button>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    </div>


}