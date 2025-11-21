import React from "react";
import RecipeItem from "./RecipeItem";
import "./RecipeList.css";

export default function RecipeList({ recettes, onEdit, onDuplicate, onDelete }) {
  return (
    <div className="grid">
      {recettes.map(r => (
        <RecipeItem
          key={r.id}
          {...r}
          onEdit={() => onEdit(r)}
          onDuplicate={() => onDuplicate(r)}
          onDelete={() => onDelete(r.id)}
        />
      ))}
    </div>
  );
}