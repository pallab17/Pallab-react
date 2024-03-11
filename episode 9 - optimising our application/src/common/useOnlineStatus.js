import React from 'react';
import { useState,useEffect } from 'react';

// Creating a function that will help us to. engage the user when the user is offline, then we will show them a screen where the user will be shown the other. four hundred four in her Internet page, such that the user knows that their Internet is off.
const useOnlineStatus = () => {
  
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
      window.addEventListener('offline', () => {
        setOnlineStatus(false);
      });
  
      window.addEventListener('online', () => {
        setOnlineStatus(true);
      });
    }, []);
  
    // * boolean value
    return onlineStatus;
}

export default useOnlineStatus
