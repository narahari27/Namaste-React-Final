const Shimmer = ()=>{
    const cards = Array(10).fill(null)
    return <div className="shimmer-container">
        {cards.map((_,index)=>(
             <div className="shimmer-card">Cards{index+1}</div>
        ))}
       
    </div>
}
export default Shimmer;