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
                        
                        <img className="foto-img-top" id = "fotos1" src={store.vehicles[fotos[parametro.index]]} />---------------------------------------

                    </div>
                    <div className="col-7" style = {{backgroundColor: "white"}}>
                        <h2 className="Datos" style= {{marginTop: "20px",color: "orange", fontSize: "150%"}}>{store.vehicles[parametro.index]?.name}</h2> 
                        <p style ={{padding: "10px, 10px, auto, 10px"}}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.

                        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra filosófica.</p>
                    </div>
                    
                    <div className="info col-2" >                                               
                     
                        <table>
                        
                            <thead  id ="thead">
                                <tr>
                                    <th scope="col">APARIENCIA</th>
                                </tr>
                                
                            </thead>
                            <tbody id= "tbody">
                                    <tr>
                                        <th scope="col">Model:</th>
                                        <td>{store.vehicles[parametro.index]?.model}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Manufacturer:</th>
                                        <td>{store.vehicles[parametro.index]?.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Cost in credits:</th>
                                        <td>{store.vehicles[parametro.index]?.cost_in_credits}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Length:</th>
                                        <td>{store.vehicles[parametro.index]?.length}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Max atmosphering speed:</th>
                                        <td>{store.vehicles[parametro.index]?.max_atmosphering_speed}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Crew:</th>
                                        <td>{store.vehicles[parametro.index]?.crew}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Passengers:</th>
                                        <td>{store.vehicles[parametro.index]?.passengers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Consumables:</th>
                                        <td>{store.vehicles[parametro.index]?.consumables}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Vehicle class:</th>
                                        <td>{store.vehicles[parametro.index]?.vehicle_class}</td>
                                    </tr>
                                   

                            </tbody>

                            
                        </table>



                    </div>
                    

                </div>

            </div>


    </div>
}
