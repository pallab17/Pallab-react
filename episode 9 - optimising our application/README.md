## Namaste React Course by Akshay Saini

# Episode 09 - Optimizing Our App

## Theory

### Topics Taught

- Custom Hooks
- Modularity in Code
- Modular Bundling
- Code Splitting
- Lazy Loading



## Namaste React Course by Akshay Saini

# Episode 09 - Optimizing our App

## Theory Assignment:

- When and why do we need `lazy()`?
- What is `suspense`?
- Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
- `Advantages and Disadvantages` of using this `code splitting pattern`?
- When `do we and why do we need suspense`?

## Coding Assignment:

- Create your `custom hooks`.
- Try out `lazy and suspense`
- Make your `code clean`.

## References:

- [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React lazy](https://react.dev/reference/react/lazy#suspense-for-code-splitting)


/*
Akshay saini is teaching us the purpose of single responsibility principle that states that as every component is a function so the component should have only one purpose of serving the application that means that by following this principle we should have we should have the test cases passing smoothly such that only one component has a single function we can define as many test test cases for such component and such that when we are actually trying to find a error in the particular application the where the particular error is coming from can be detected by that particular component error that's why we should follow this we should follow this principle of single responsibility and also this principle gives us the familiarity of modularity which states that we can use this component anytime we want to and the second thing the third thing along with this testing and modularity is the case of finding bugs like if I say right now that the application is made of components which are linked together then even if the bugs are right in front of me then I have to search in all the components to find the bugs present in the application so this single responsibility help us to find the bug in the which is coming from the particular component
So our code becomes reusable maintainable as well as testable When we use the single responsibility function purpose
So now Sir will teach us the component that is not following. single. responsibility function. which we can optimize. by writing our own custom hooks.

custom hook without use o lekha jaye
but it is a ggod practice to write use before any custom hook.

whenever we develop a large scale appn consisting of 1000+ components performance is low
to improve this what we need is ?


kotha ta hocche je jehetu parcel react r sob kota ke ek jayega te joro kore 
just ekta file index.js r modhe sob kota code rekhe oi file take screen e render kore tai jonno
ebar ki hocche joto component barbe toto ei index.js file r size barbe
ebar development build e size 2mb thakle production build e size aro kombe.

ekta  1000 ta component wala appn e onek kota bundler thake 
bundler hocche basically onek kota code ke ekjayega kore 

toh amra jodi just ekta bundler na rekhe 
onek kota bundler e benge di 
logical fn unujai

tahole aar ekta single index.js file thakche na onek kota file thakbe
tahole load porbe na ekta file r opor tai jonno api call slow hobe na 
such that performance better hobe

this process is known as chunking or code -spliting or dynamic bundling.



*/