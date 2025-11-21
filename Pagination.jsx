export default function Pagination({ page, total, setPage }) {
  if (total <= 1) return null;
  return (
    <div style={{textAlign:"center",margin:"40px 0"}}>
      {[...Array(total)].map((_,i)=>(
        <button key={i+1} onClick={()=>setPage(i+1)} style={{margin:"0 5px",padding:"10px 16px",borderRadius:"12px",border: page===i+1 ? "2px solid #4a90e2" : "2px solid #ddd",background: page===i+1 ? "#4a90e2" : "white",color: page===i+1 ? "white" : "#333"}}>
          {i+1}
        </button>
      ))}
    </div>
  );
}