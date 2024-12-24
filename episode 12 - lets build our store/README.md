redux - dont depend heavily on redux
redux handles a lot of states and data
redux in data layer
react and redux are different
redux eases debugging
zustland o ache ekta 
redux offers state mngment so jekono framework libary r sathe cholbe
majorly use hoye react r sathe 

redux toolkit ebong react-redux use korbo eikhane
react redux hocche react aar redux r r majhe connrction toiri kora
redux toolkit  = rtk
  

  ![redux diye cart pg banabo](image.png)

  redux store = big js object with a lot of data inside it and it is kept in a global central space 
  react e jekono component ei store take access korte parbe

  amar nijer data ke most of the data ke eikhane store kore rakhi

  sob data eo eikhane rakha jaye
  redux r jate problem na hoye redux slices hisabe data tule rakhe

  ![slices](image-1.png)
   now the card slice will have all the data of the cart

   ![slice empty ](image-2.png) prothome card slice empty thake tarpor card slice e amra data dhokai
jeta sohoj na

add to cart button tiple ki kore data ta card slice e dhoke?
directly data dhokano jaye na
ekta upay ache  amader

click on the add button --> dispatch an action now this will call a function
now thid fn will modify the cart
![flow ta](image-3.png)

and this fn is known as the reducer function 
![flow ta](image-4.png)

add button -> dispatch an action -> which calls the reducer function -> which updates the slice of the redux store

now how to read data 
![reading data ](image-5.png)

now to read data we use selector 


