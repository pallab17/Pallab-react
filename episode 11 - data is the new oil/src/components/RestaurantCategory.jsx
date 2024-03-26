import React from 'react'
import Itemlist from './Itemlist'

const RestaurantCategory = ({data}) => {
    // console.log(data.data.title); props e sudhu data send korle
    // console.log(data.title); props e {data} send korle
  return (
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg  p-4 '>
    {/* accordian contains of
     header and body */}
     {/* accordian header */}
     <div className='flex justify-between'>
     <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
     <span>🔽</span>
     </div>

      {/* accordian datalist */}
      <Itemlist items ={data.itemCards}/>
    </div>
  )
}

export default RestaurantCategory
