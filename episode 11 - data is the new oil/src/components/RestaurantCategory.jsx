import React, { useState } from 'react'
import Itemlist from './Itemlist'

const RestaurantCategory = ({data}) => {
    // console.log(data.data.title); props e sudhu data send korle
    // console.log(data.title); props e {data} send korle
    const [showItems,setShowItems] = useState(false);
    const handleClick = ()=>{
      // console.log("clicked");
      // setShowItems(true);  // data show hocche but collapse korte parchi na toggle korate hoeb
      setShowItems(showItems==false); // toggle korchi jodi showtime false hoye tahole false==false hoye expand hobe aar jodi jodi showtime true hoye tahole true==false hoye collapse hobe

    }
  return (
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg  p-4 '>
    {/* accordian contains of
     header and body */}
     {/* accordian header */}
     <div className='flex justify-between cursor-pointer'
     onClick={handleClick}
     >
     <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
     <span>🔽</span>
     </div>

      {/* accordian datalist */}
     { showItems && <Itemlist items ={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory
