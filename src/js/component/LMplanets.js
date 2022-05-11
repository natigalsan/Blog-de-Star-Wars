import React, {useContext} from "react"; //debo capturar el hook usePArams
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const LMplanets= () => {
    const {store, actions} = useContext(Context);
    const parametro = useParams ();  //esto se comporta como un objeto
    return <div>

            <div className="container-fluid" id ="LMpj">

                <h1 className="tituloPeople" id = "headerh1" style={{color: "orange", display: "flex", justifyContent: "center", textAlign: "center"}}><i>Guía Star Wars</i></h1>
                <div className="container-fluid row">
                    <div className="col-3" style = {{paddingLeft: "0", display: "flex", justifyContent: "left", alignContent: "left", backgroundColor: "white"}}>
                        
                    <img className="card-img-top" src={parametro.img}/>

                    </div>
                    <div className="col-7" style = {{backgroundColor: "white"}}>
                        <h2 className="Datos" style= {{marginTop: "20px",color: "orange", fontSize: "150%"}}>{store.planets[parametro.ind]?.name}</h2> 
                        <p style ={{padding: "10px, 10px, auto, 10px"}}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.

                        Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra filosófica.</p>
                    </div>
                    
                    <div className="info col-2" >                                               
                     
                        <table class="" style = {{color: "white"}}>
                        
                            <thead  id ={"thead"}>
                                <tr>
                                    <th scope="col">APARIENCIA</th>
                                </tr>
                                
                            </thead>
                            <tbody id= "tbody">
                                    <tr>
                                        <th scope="col">Rotation period:</th>
                                        <td>{store.planets[parametro.ind]?.rotation_period}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Orbital period:</th>
                                        <td>{store.planets[parametro.ind]?.orbital_period}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Diameter:</th>
                                        <td>{store.planets[parametro.ind]?.diameter}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Cimate:</th>
                                        <td>{store.planets[parametro.ind]?.climate}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Gravity:</th>
                                        <td>{store.planets[parametro.ind]?.gravity}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Terrain:</th>
                                        <td>{store.planets[parametro.ind]?.terrain}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Surface water:</th>
                                        <td>{store.planets[parametro.ind]?.surface_water}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Population:</th>
                                        <td>{store.planets[parametro.ind]?.population}</td>
                                    </tr>
                                    

                            </tbody>

                            
                        </table>



                    </div>
                    

                </div>

            </div>


    </div>



}