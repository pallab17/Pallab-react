episode 10-
 writing css ways

 1. normal css writing style jeita amra use korechi episode 9 opdi
 2.sass scass
 3. styled components uber e akshay saini use koreche
 4.material ui
 5.chakra ui
 6. bootstrap
7. ant design
8. tailwind css - jeita amra sikhbo ajke

syntax importing tailwing with parcel
npm install -D tailwindcss postcss
npx tailwindcss init


.postcssrc
code
{
  "plugins": {
    "tailwindcss": {}
  }
}
<!-- So basically we are using a postcsrc  and we are writing this code inside postcsrc such that whenever react finds tailwind code in our project, it understands that it is a composed of Tailwind. The classes are made up of Tailwind Css and that classes should be incorporated to render the view onto the screen. And post css rc is just the method which converts css into Javascript. That's all. -->

postcssrc is a method such that our appn understands tailwind
