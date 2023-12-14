import React from "react";
import { useSelector } from "react-redux";

export const Bio = () => {
  const photos = useSelector(state => state.photo)
 
  
  return (
    <div className="bio">
      <figure className="profile-bio">
        <img src={photos[5].url} alt="perfil"/>
      </figure>

      <div className="containerInfo-bio">
        <div className="follow-bio">
          <h1 className="mainName-bio">Juliano_diasm</h1>

          <div className="buttons-bio">
              <input type="button" value="Editar Pefil" />
              <input type="button" value="Itens Arquivados" />
          </div>

          <span>...</span>
        </div>

        <div className="data-bio">
          <ul className="follow-bio">
            <li>
              <a href="#">10 Publicações</a>
            </li>
            <li>
              <a href="#">200 Seguidores</a>
            </li>
            <li>
              <a href="#">100 Seguindo</a>
            </li>
          </ul>
          <div />
        </div>
        <div className="description-bio">
          <h4>Juliano Dias</h4>
          {/* Limitar a linha da descrição a 36 */}
          <p>🔒 Segurança da informação - AMB</p>
          <p>🎹 Músico e compositor quando dá</p>
        </div>
      </div>
    </div>
  );
};
