import React from "react";
import {images} from "../img/images";

export const Bio = () =>{
    return(
        <div className="bio">
            
            <figure className="cardImage-bio"> 
                    <img  src={images[4].url} alt="perfil"/>
            </figure>

            <div className="containerInfo-bio">
                <div className="follow-bio" >
                    <h1 className="mainName-bio">Julianodiasm</h1>
                    <input type="button" value="Seguindo" />
                    <input type="button" value="Enviar Mensagem" />
                    <span>...</span>
                </div>

                <div className="data-bio">
                    <ul>
                        <li><a href="#">Publicações</a></li>
                        <li><a href="#">Seguidores</a></li>
                        <li><a href="#">Seguindo</a></li>
                    </ul>
                <div/>
                    
            </div>
                <div className="description-bio">
                    <h4>Juliano Dias</h4>
                    {/* Limitar a linha da descrição a 36 */}
                    <p>🔒 Segurança da informação - AMB</p>
                    <p>🎹 Músico e compositor quando dá</p>
                </div>
            </div>

        </div>
    )
}