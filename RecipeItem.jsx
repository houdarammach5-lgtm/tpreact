// RecipeItem.jsx
import React from "react";
import "./RecipeItem.css";

export default function RecipeItem({ titre, img, categorie, ingredients, difficulté, description, date, onEdit, onDuplicate, onDelete }) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={img} alt={titre} />
        <span className="badge">{categorie}</span>
      </div>
      <div className="content">
        <h3>{titre}</h3>
        <p className="desc">{description}</p>
        <div className="tags">
          {ingredients.map((i, idx) => <span key={idx} className="tag">{i}</span>)}
        </div>
        <div className="diff">Difficulté : <span className="flame">{"fire".repeat(difficulté)}</span></div>
        <p className="date">Créée: {date}</p>
        <div className="actions">
          <button onClick={onEdit} className="edit">Modifier</button>
          <button onClick={onDuplicate} className="copy">Dupliquer</button>
          <button onClick={onDelete} className="delete">Supprimer</button>
        </div>
      </div>
    </div>
  );
}