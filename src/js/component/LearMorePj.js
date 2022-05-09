import React, {useContext} from "react"; //debo capturar el hook usePArams
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const LearnMorePj = () => {
    const {store, actions} = useContext(Context);
    const parametro = useParams ();  //esto se comporta como un objeto
    return <div>

            <div className="container-fluid">

                <h1 className="tituloPeople" id = "headerh1" style={{color: "orange", display: "flex", justifyContent: "center", textAlign: "center"}}><i>Guía Star Wars</i></h1>
                <div className="container row">
                    <div className="col-3" style = {{paddingLeft: "0", display: "flex", justifyContent: "left", alignContent: "left", backgroundColor: "white"}}>
                        
                        <img className="foto-img-top" id = "fotos" src={`https://starwars-visualguide.com/assets/img/characters/${Number(parametro.i)+1}.jpg`} />

                    </div>
                    <div className="col-9" style = {{backgroundColor: "white"}}>
                        <h2 className="Datos" style= {{marginTop: "20px",color: "orange", fontSize: "150%"}}>{store.people[parametro.i]?.name}</h2> 
                        <p style ={{padding: "10px, 10px, auto, 10px"}}>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.

Se cree ampliamente que la historia de Lorem Ipsum se origina con Cicerón en el siglo I aC y su texto De Finibus bonorum et malorum. Esta obra filosófica.</p>
                    </div>
                    <div className="info">
                    <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                            </table>



                    </div>
                    

                </div>

            </div>


    </div>



}