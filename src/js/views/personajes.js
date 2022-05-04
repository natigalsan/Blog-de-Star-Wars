import React from "react"; 
import { Link } from "react-router-dom";


export const Personajes = (props) => {

    return <div>

        {/*para visualizar mi componente CARD he de llamarla dentro de personajes.js: <Card  key....i...store...tal tal tal ver video/>*/}
        {/*y despues crear un fech que me genere el contenido de las card y luego con las card ponerle los atributos, ver videos: */}

        {/* <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link to = "/">
                    <button>Learn more</button>
                </Link>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>   */}


    </div>

    
}