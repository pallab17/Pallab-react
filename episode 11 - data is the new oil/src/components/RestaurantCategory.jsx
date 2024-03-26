import React from 'react'

const RestaurantCategory = ({data}) => {
    // console.log(data.data.title); props e sudhu data send korle
    // console.log(data.title); props e {data} send korle
  return (
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg  p-4 flex justify-between'>
    {/* accordian contains of
     header and body */}
     <span className='font-bold text-lg'>{data.title}</span>
     <span>🔽</span>
      
    </div>
  )
}

export default RestaurantCategory
