/*
class based component - normal js class

how to create a class syntax
class component_name
e.g class UserClass

and to make it class based component such that reacts understands that is a class based component and tracks it
syntax entends React.Component
i.e. tahole
class UserClass extends React.Component ei gota ta likhbo to create a class based component


ebar kotha ta hocche je whats the difference btw class and fnal components ?
fnal component - js fn which returns a jsx

class based component - js class which extends react.component and which has the render fn which returns a piece of jsx


now React.Component is a class jeita amader ke react diyeche jeita theke UserClass kichu property inherit korche
so amader ke import korte hobe ei React.Component from React using import React from "react";
ekta mathaye qs astei pare je babu ami use korchi React.Component tahole ami import React.Component keno korchi na ?
ans ta hocche React.Component hocche react r chele so React hoccche baba jodi ami baba kei import kori tahole chele keo sathe peye jabo  bujhla ?


Class based component r import export same bhabei hoye like fnal components


props in class based components
 <UserClass
                name="pb7 class based component props sikhchi"   --> props 
            />
fnal component ke jerom bhabe props send kori amra sei bhabei amra class based component keo prop send kori amra
sudhu props ta receive korar time e amra constructor fn use kore props ta receive kori tarpor ekta super fn likhe i.e. super() oitar modhe props ta dhukiye di etai niyom basically byas etai holo difference
// to receive the props ekta constructor fn banachi
syntax of receiving props in a class based component
constructor(props){
    super(props);
    console.log(props);
}
ekta question why using  super(props) ?
ans ta hocche je bhai this. property/fn ta use korte chai bole super() fn use korte hobe
why we need this. fn ? this.fn use na korle props jeita asche seta access kore use korbo ki kore pagla!

** 
rendering a fnal component on the screen-->
on ur web page if there is a fnal component the web page loads with that fnal component
this means we are mounting/calling/invoking that fnal component

**
loading/rendering a class based component on the screen is basically creating a instance of a class 
jokhun ei amra ekta class based component create korchi tokhun ei constructor ta call hoye aar 
constructor r modhe amra sudhu props ei receive korina amra  state variable guno ei constructor r modhei likhi
age kar time e usestate bole kono hook chilo na this.state use kora hoto for using state variables



fnal component e state variable guno alada alada kore amra likhi tao react ei state var guno ke ek jayega kore rakhe behind the scenes

class based component toh age thekei sob kota state var ke ek jayega te joro kore rakhe 



** lifecycle of an class based parent component and a class based child component
parent constructor
parent render
child constructor
child render
child component did mount
parent component did mount


*** lifecycle of an class based parent component and two class based child component
parent constructor
parent render

firstchild constructor   --this is the render 
firstchild render   -- phase for firstchild

secondchild constructor  -- this is the render 
secondchild render -- phase for secondchild

firstchild component did mount  -- this is the commit phase of first child
second child component did mount  -- this is the commit phase of second child

parent component did mount

refernce nicchi from  [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

why this order ?
render phase ta basically virtual dom e kaj hoye(i.e. just diff algo ta chole reconcilation process suru hoye tai jonnoi just difference is previous and updated dom tree r modhe difference take note kore rakha hoye) so fast process hoye 
tai react multiple child component ke eksathe batch/ekjayega  kore age ei child gunor render phase excecute koriye deye

commit phase e actual dom update hoye tarpor didmount fn tao chole 
so jehetu actual dom update hoye tai eita onek expensive task 
so react child component  gulo ke  eksathe batch/ekjayega kore por por commit kore jate 
performance ta fast  hoye this is the reason react is fast.

*/
import React from "react";

class UserClass extends React.Component {
  // to receive the props ekta constructor fn banachi
  constructor(props) {
    super(props);
    // console.log("parent-constructor");

    // creating state variables
    // sob kota state variable eitar bhetore ei thakbe
// ei this.state hocche ekta big whole object containing all the state variables
    this.state ={
        // eg 
        // count : 0,
        //  count2 : 0,
        // ekta state var banachi oitar modhe je github api ta use kore data anchi oita data ke var r modhe update kore debo
        userInfo :{
          name : "dummy",
          location:"default",
        }

    }
   //  console.log(this.props.name + 'Child Constructor');
  }
  
  // componentDidMount() {
  //   // console.log(this.props.name + 'Child- componentDidMount');
  // }
  // amra fn based component e jerom useffect hook use kore api call kortam using async await fn ekhane class based component e amra api call korbo making this componentdidMount fn async
// async componentDidMount(){
//   console.log( 'Child- componentDidMount');
//   const data = await fetch("https://api.github.com/users/pallab17");
//   const json = await data.json();
//   console.log(json);
//   this.setState({
//     userInfo:json,
//   })
// }

componentDidMount(){
  // ei set interval fn ta about pg e click korle 1s ontor ontor cholbe tarpor onno pg e navigate korle ei set interval fn ta abar notun kore zero theke start hobe
  // to stop this we use componentwillmount() fn jate about pg e sudhu chole ei set interval fn ta i.e. whenever we are navigating to another pg ei set interval fn ta cholbe na bondho hoye jabe
  this.timer = setInterval(()=>{
console.log("pb7 op");
  },1000)
}
/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */


// first time render hoye componentdidmount() fn ta call hocche
// tarpor theke joto bar render hoye componentDidUpdate() fn ta call hoye as forst bar r por theke component is updated not mounted
// componentDidUpdate() fn is the only method which is called everytime the component is updated


// basically ei stage ta hocche 2nd  last stage of mounting 
componentDidUpdate(){
  console.log("component did update");
}

// when we navigate to another component or pg this fn is called 
componentWillUnmount(){
  console.log("component willunmount");
}




  // it contains a render method /fn which returns a piece of jsx which will be displayed on the ui
  render() {
   // console.log(this.props.name + 'Child-render');
    // const { name, loc } = this.props;
    // const {count,count2} = this.state;
    const {name,location,login,avatar_url
    } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h2>{this.props.name} </h2>   
        {/* erom bhabe likhbo na dher lets destructure it */}
        {/* <h3>{this.props.loc} </h3>  */}
        {/* destructure korar por */}
        {/* <h1>classCount = {count}</h1>
        <h1>classCount2 = {count2}</h1> */}
        {/* <button onClick={()=>{
            // never update state var directly
            // setState()  fn ta react amaader ke deye to update the state var just like fnal component e useState r fn ta
// setState r bhetore it contains the logic of updated var in  a object format 
            this.setState({
                count : this.state.count + 1,
            })
        }}
        >CountIncrease</button> */}
        {/* <button onClick={()=>{
            // never update state var directly
            // setState()  fn ta react amaader ke deye to update the state var just like fnal component e useState r fn ta
// setState r bhetore it contains the logic of updated var in  a object format 
            this.setState({
                count : this.state.count - 1,
            })
        }}
        >CountDecrease</button> */}
        {/* <button onClick={()=>{
            this.setState({
                count:0,

            })
        }}
        >CountNeutral</button> */}
        <img src={avatar_url}/>
        <h2>Name -{name} </h2>
        <h3>loc-{location} </h3>
        <h4>Contact - github-{login}</h4>
      </div>
    );
  }
}

// exporting the class based component
// syntax
// export default Component_name

export default UserClass;
