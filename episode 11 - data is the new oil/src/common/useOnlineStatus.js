import React from 'react';
import { useState,useEffect } from 'react';

// Creating a function that will help us to. engage the user when the user is offline, then we will show them a screen where the user will be shown the other. four hundred four in her Internet page, such that the user knows that their Internet is off.
const useOnlineStatus = () => {
  
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        // This window dot at event listener is pro. us with the facility two. actually observe or analyze if the users Internet is on or off and such that we are using this function provided by the window DOM object to see whether the users net is on or off such that we if their Internet is off, we will show them the offline page that is and if their Internet is online then we will show them the menu cards.
      window.addEventListener('offline', () => {
        setOnlineStatus(false);
      });
  
    //   Now, one thing that is to check or test this window add event listener function. We should turn off our Internet, but there is also a facility in Google Chrome to check whether our browser. Having Internet or not, and to turn off the Internet in our browser, which can go to the network tab in the inspect section in that inspect section of under the network tab, there is a option known as throttling and under that throttling function there is a function to turn off the Internet. Now we will turn off the Internet from there and we will see how our browser reacts when our Internet is off in our browser.
      window.addEventListener('online', () => {
        setOnlineStatus(true);
      });
    }, []);
  
    // * boolean value
    return onlineStatus;
}

export default useOnlineStatus
