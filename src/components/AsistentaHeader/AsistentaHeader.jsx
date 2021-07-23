import React from "react";
import "../../components/AsistentaHeader/AsistentaHeader.css";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

function HeaderAsistenta() {
  return (
    <div className="container-asistenta">
      <h1 className="h1">Asistență</h1>
      <div className="input-search">
        <Search className="icon-search" />
        <input
          type="text"
          className="input"
          placeholder="Cu ce problema te confrunti?"
        />
      </div>
    </div>
  );
}

export default HeaderAsistenta;
