import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import RecipeFilter from "./RecipeFilter";
import Pagination from "./Pagination";
import Aide from "./Aide";
import taco from "./img.jpg";
import smoothie from "./img2.webp";
import "./MainPage.css";

function MainPage() {
  const [recettes, setRecettes] = useState([
    { id: 1, img: taco, titre: "Tacos méditerranéens",
       categorie: "Plat", ingredients: ["Tortilla","Poulet","Tomate","Feta"], 
       difficulté: 3, description: "Tacos légers et parfumés.", date: "11/19/2025" },
    { id: 2, img: smoothie, titre: "Smoothie mangue",
       categorie: "Boisson", ingredients: ["Mangue","Lait ","Miel"],
        difficulté: 1, description: "Boisson fraîche et fruitée.", date: "11/19/2025" }
  ]);

  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editRecette, setEditRecette] = useState(null);
  const perPage = 6;

  const filtered = recettes.filter(r => 
    r.titre.toLowerCase().includes(search.toLowerCase()) &&
    (!catFilter || r.categorie === catFilter)
  );

  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const openForm = (recette = null) => { setEditRecette(recette); setShowForm(true); };
  const closeForm = () => { setShowForm(false); setEditRecette(null); };

  const saveRecette = (rec) => {
    if (editRecette) {
      setRecettes(recettes.map(r => r.id === editRecette.id ? rec : r));
    } else {
      setRecettes([...recettes, { ...rec, id: Date.now() }]);
    }
    closeForm();
  };

  const duplicate = (rec) => {
    setRecettes([...recettes, { ...rec, id: Date.now(), titre: rec.titre + " (copie)" }]);
  };

  const remove = (id) => {
    if (window.confirm("Supprimer ?")) setRecettes(recettes.filter(r => r.id !== id));
  };

  return (
    <div className="main">
      <header className="header">
        <h1>Creative Recipe Builder</h1>
      </header>

      <div className="topbar">
        <RecipeFilter search={search} setSearch={setSearch} cat={catFilter} setCat={setCatFilter} />
        <button onClick={() => openForm()} className="btn-new">+ Créer une nouvelle recette</button>
      </div>

      <div className="content">
        <div className="recipes">
          <RecipeList recettes={current} onEdit={openForm} onDuplicate={duplicate} onDelete={remove} />
          <Pagination page={page} total={totalPages} setPage={setPage} />
        </div>
        <Aide />
      </div>

      {showForm && <RecipeForm recette={editRecette} onSave={saveRecette} onClose={closeForm} />}
    </div>
  );
}

export default MainPage;