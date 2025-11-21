import React, { useState } from "react";
import "./RecipeForm.css";

export default function RecipeForm({ recette, onSave, onClose }) {
  const [titre, setTitre] = useState(recette?.titre || "");
  const [categorie, setCategorie] = useState(recette?.categorie || "Plat");
  const [ingredients, setIngredients] = useState(recette?.ingredients || []);
  const [newIng, setNewIng] = useState("");
  const [diff, setDiff] = useState(recette?.difficulté || 2);
  const [desc, setDesc] = useState(recette?.description || "");
  const [img, setImg] = useState(null);

  const addIng = () => { if (newIng.trim()) { setIngredients([...ingredients, newIng.trim()]); setNewIng(""); } };
  const delIng = i => setIngredients(ingredients.filter((_, idx) => idx !== i));

  const submit = e => {
    e.preventDefault();
    onSave({
      ...recette,
      titre, categorie, ingredients, difficulté: diff, description: desc,
      img: img ? URL.createObjectURL(img) : recette?.img
    });
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="header">
          <h2>{recette ? "Modifier" : "Nouvelle recette"}</h2>
          <button className="close" onClick={onClose}>×</button>
        </div>
        <div className="body">
          <form onSubmit={submit}>
            <label>Nom</label>
            <input value={titre} onChange={e=>setTitre(e.target.value)} required />
            <label>Catégorie</label>
            <select value={categorie} onChange={e=>setCategorie(e.target.value)}>
              <option>Entrée</option><option>Plat</option><option>Dessert</option><option>Boisson</option>
            </select>
            <label>Ingrédients</label>
            {ingredients.map((ing,i)=><div key={i} className="ing"><input value={ing} readOnly /><button type="button" onClick={()=>delIng(i)}>×</button></div>)}
            <div className="add"><input value={newIng} onChange={e=>setNewIng(e.target.value)} placeholder="Nouvel ingrédient" />
            <button type="button" onClick={addIng}>+ Ajouter</button></div>
            <label>Difficulté : {diff}</label>
            <input type="range" min="1" max="5" value={diff} onChange={e=>setDiff(e.target.value)} />
            <label>Description</label>
            <textarea rows="4" value={desc} onChange={e=>setDesc(e.target.value)} />
            <label>Image</label>
            <input type="file" accept="image/*" onChange={e=>setImg(e.target.files[0])} />
          </form>
        </div>
        <div className="footer">
          <button type="submit" onClick={submit} className="save">Enregistrer</button>
          <button onClick={onClose} className="cancel">Annuler</button>
        </div>
      </div>
    </div>
  );
}