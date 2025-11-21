import React from "react";
import "./Aide.css";

function Aide() {
  return (
    <div className="aide-card">
      <div className="aide-header">
        <h3>Aide rapide</h3>
        <span className="version">v1.0</span>
      </div>
      <ul>
        <li>Cliquez sur <strong>+ Créer une nouvelle recette</strong> pour ouvrir le formulaire.</li>
        <li>Pagination numérotée en bas de la liste</li>
      </ul>
    </div>
  );
}

export default Aide;