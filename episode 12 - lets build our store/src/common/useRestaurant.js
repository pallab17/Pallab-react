/*
As because  use restaurant js  is a hook. so we will write this component or we will place this file inside the utility folder or the common folder as a hook is a utility function. A utility function is a normal Javascript function which does. something for us.

*/
import { MENU_API } from "../common/constants";
import { useState, useEffect } from "react";
//import React, { useEffect } from 'react'

const useRestaurant = (resID) => {
    const [resInfo, setresInfo] = useState(null);
    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async()=>{
        const data = await fetch(MENU_API + resID);
        const json = await data.json();
        setresInfo(json);

    }

    //As because we will only fetch the data once, so only one in 1 single element. or an empty dependency array I am providing in the user effect hook second argument.
  return resInfo;
}

export default useRestaurant;
