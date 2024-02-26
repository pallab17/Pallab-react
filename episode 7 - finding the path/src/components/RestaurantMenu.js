import React from 'react'
import { useEffect } from 'react';

const RestaurantMenu = () => {
    useEffect(()=>{
        fetchMenu();

    },[]);

    const fetchMenu = async ()=>{
        const data =  await fetch();
        
        const json = await data.json();

        console.log(json);

        
    }
  return (
    <div className='menu'>
    <h1>name of rest</h1>
    <h2>menu</h2>
    <ul>
        <li>momo</li>
        <li>chips</li>
        <li>biryani</li>
    </ul>

      
    </div>
  )
}

export default RestaurantMenu
