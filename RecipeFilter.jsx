export default function RecipeFilter({ search, setSearch, cat, setCat }) {
  return (
    <div style={{display:"flex",gap:"15px",alignItems:"center"}}>
      <input value={search} onChange={e=>setSearch(e.target.value)}
       placeholder="Rechercher..."
        style={{padding:"12px",borderRadius:"12px",border:"1px solid #ddd",width:"300px"}} />
      <select value={cat} onChange={e=>setCat(e.target.value)}
       style={{padding:"12px",borderRadius:"12px",border:"1px solid #ddd"}}>
        <option value="">Toutes catégories</option>
        <option>Entrée</option><option>Plat</option><option>Dessert</option><option>Boisson</option>
      </select>
    </div>
  );
}