import User from "./User"
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../common/UserContext";

// const About = ()=> {
//     return(
//         <>
//             <h1>About Us page</h1>
//             <h2>this is me pb7 watching react webseries by akshay saini</h2>
//             {/* <User
//                 // name="pb7 functional component" one way of passing props
//                 name={"pb7 functional component props sikhchi"}  // another way of passing props
//             /> */}
//             {/* <h3>class based component starts</h3> */}
//             <UserClass
//                 name="pb7 class based component props sikhchi"
//                 loc="location - Bally-class"
//             />
//         </>
//     )
// }
class About extends React.Component{
    constructor(props){
        super(props);
       // console.log("parent-constructor");

    }
    componentDidMount() {
       //  console.log('Parent Component Did Mount');
      }

    render(){
      //  console.log("parent-render");
        return(
            <>
                <h1>About Us page</h1>
                <div>
                    LoggedInUser
                    <UserContext.Consumer>
                        {/* {(data)=> console.log(data)} */}
                        {/* {({loggedInUser}) => (
                            <h1 className="font-bold">{loggedInUser}</h1>
                        )} */}
                        {({loggedInUser}) => {
                          return  <h1 className="font-bold">{loggedInUser}</h1>
                        }}
                    </UserContext.Consumer>
                </div>
                <h2>this is me pb7 watching react webseries by akshay saini</h2>
                {/* <User
                    // name="pb7 functional component" one way of passing props
                    name={"pb7 functional component props sikhchi"}  // another way of passing props
                /> */}
                {/* <h3>class based component starts</h3> */}
                <UserClass
                    name="pb7 class based component props sikhchi"
                    loc="location - Bally-class"
                />
                {/* <UserClass
                    name="ouuuu class based component props sikhchi"
                    loc="location - Ballygange-class"
                />
                 <UserClass
                    name="third class based component props sikhchi"
                    loc="location - Ballygange-class"
                /> */}
            </>
        )
    }

}

export default About;