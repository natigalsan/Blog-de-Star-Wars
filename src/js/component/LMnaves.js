import React, {useContext} from "react"; //debo capturar el hook usePArams
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const LMnaves = () => {
        let fotos = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez]

    const {store, actions} = useContext(Context);
    const parametro = useParams ();  //esto se comporta como un objeto
    return <div>

            <div className="container-fluid" id ="LMnaves">

                <h1 className="tituloPeople" id = "headerh1" style={{color: "orange", display: "flex", justifyContent: "center", textAlign: "center"}}><i>Guía Star Wars</i></h1>
                <div className="container-fluid row">
                    <div className="col-3" style = {{paddingLeft: "0", display: "flex", justifyContent: "left", alignContent: "left", backgroundColor: "white"}}>
                        
                        <img className="foto-img-top" id = "fotos" src={store.vehicles.fotos[parametro.index]} />---------------------------------------

                    </div>
                    <div className="col-7" style = {{backgroundColor: "white"}}>
                        <h2 className="Datos" style= {{marginTop: "20px",color: "orange", fontSize: "150%"}}>{store.vehicles[parametro.index]?.name}</h2> 
                        <p style ={{padding: "10px, 10px, auto, 10px"}}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.

                        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra filosófica.</p>
                    </div>
                    
                    <div className="info col-2" >                                               
                     
                        <table className="" style = {{color: "white"}}>
                        
                            <thead  id ={"thead"}>
                                <tr>
                                    <th scope="col">APARIENCIA</th>
                                </tr>
                                
                            </thead>
                            <tbody id= "tbody">
                                    <tr>
                                        <th scope="col">Height:</th>
                                        <td>{store.vehicles[parametro.index]?.height +" "+"cm"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Mass:</th>
                                        <td>{store.vehicles[parametro.index]?.mass +" "+"kg"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Hair color:</th>
                                        <td>{store.vehicles[parametro.index]?.hair_color}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Skin color:</th>
                                        <td>{store.vehicles[parametro.index]?.skin_color}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Eye color:</th>
                                        <td>{store.vehicles[parametro.index]?.eye_color}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Birth year:</th>
                                        <td>{store.vehicles[parametro.index]?.birth_year}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Gender:</th>
                                        <td>{store.vehicles[parametro.index]?.gender}</td>
                                    </tr>
                                   

                            </tbody>

                            
                        </table>



                    </div>
                    

                </div>

            </div>


    </div>
}
