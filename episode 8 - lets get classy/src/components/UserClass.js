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



lifecycle of an class based parent component and a class based child component
parent constructor
parent render
child constructor
child render
child component did mount
parent component did mount

*/
import React from "react";

class UserClass extends React.Component {
  // to receive the props ekta constructor fn banachi
  constructor(props) {
    super(props);
    console.log(props);

    // creating state variables
    // sob kota state variable eitar bhetore ei thakbe
// ei this.state hocche ekta big whole object containing all the state variables
    this.state ={
        // eg 
        count : 0,
         count2 : 0,

    }
  }

  // it contains a render method /fn which returns a piece of jsx which will be displayed on the ui
  render() {
    const { name, loc } = this.props;
    const {count,count2} = this.state;
    return (
      <div className="user-card">
        {/* <h2>{this.props.name} </h2>   
        {/* erom bhabe likhbo na dher lets destructure it */}
        {/* <h3>{this.props.loc} </h3>  */}
        {/* destructure korar por */}
        <h1>classCount = {count}</h1>
        {/* <h1>classCount2 = {count2}</h1> */}
        <button onClick={()=>{
            // never update state var directly
            // setState()  fn ta react amaader ke deye to update the state var just like fnal component e useState r fn ta
// setState r bhetore it contains the logic of updated var in  a object format 
            this.setState({
                count : this.state.count + 1,
            })
        }}
        >CountIncrease</button>
        <button onClick={()=>{
            // never update state var directly
            // setState()  fn ta react amaader ke deye to update the state var just like fnal component e useState r fn ta
// setState r bhetore it contains the logic of updated var in  a object format 
            this.setState({
                count : this.state.count - 1,
            })
        }}
        >CountDecrease</button>
        <button onClick={()=>{
            this.setState({
                count:0,

            })
        }}
        >CountNeutral</button>
        <h2>{name} </h2>
        <h3>{loc} </h3>
        <h4>Contact - github-pallab17</h4>
      </div>
    );
  }
}

// exporting the class based component
// syntax
// export default Component_name

export default UserClass;
