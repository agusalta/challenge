import React from "react";
import "./header.css";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Chip from "../../components/Chip/Chip";

function Header() {
  return (
    <header id="header-container">
      <div className="top">
        <div className="top-left">
          <h1 className="top-left_title">Campo 1</h1>
          <FileCopyIcon fontSize="large" style={{ color: "#0c154d" }} />
          <Chip text="Ok" variant={2} />
          <Chip text="Total de granos: 200 (ton)" />
        </div>
        <div className="top-right">
          <button className="top-right_btn">Editar establecimiento</button>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-left">
          <button className="bottom-left_btn">Principal</button>
          <button className="bottom-left_btn">Bitácora</button>
        </div>
        <div className="bottom-right">
          <a className="bottom-right_a" href="/">
            Cotizá tu seguro
          </a>
          <a className="bottom-right_a" href="/">
            Financiate con tus granos
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
