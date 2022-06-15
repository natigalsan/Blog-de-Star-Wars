import React, {useContext} from "react"; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card_personajes = (props) => {
    const {store, actions} = useContext(Context);

    return <div>

        <div className="card" style={{minWidth: "300px"}} id = "cardsSW">
            <img className="card-img-top" src={props.img} 
            // onError ={e =>{e.target}}

            alt="Card image cap"/>
            <div className="card-body">
                <h4 className="card-title" style={{color: "black"}}><strong>{props.name}</strong></h4>
                <p className="card-text"><strong>Gender:</strong>{" "+props.gender}</p>

            <div>
                <Link to = {"/personajes/learnMorePj/"+ props.i}>
                    <button className="btn btn-warning">Learn more</button>
                </Link>
                <button className="btn btn-light"
                onClick={()=>{
                    actions.addFavP(props.name);
                }}
                ><i class="far fa-heart"></i></button>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
                
            </div>
        </div>

    </div>


}