const Itemlist = ({items})=>{
    console.log(items);
    return (
        <div>
        {items.map((item)=>(
            <div
            key={item.card.info.id}>
            <div>
                <span>{item.card.info.name}</span>
                <span>{item.card.info.defaultPrice
                || item.card.info.finalPrice||item.card.info.price
                }</span>
            </div>

            </div>

        ))}
            
        </div>
    )
}
export default Itemlist