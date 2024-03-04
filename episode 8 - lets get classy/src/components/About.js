import User from "./User"
import UserClass from "./UserClass";

const About = ()=> {
    return(
        <>
            <h1>About Us page</h1>
            <h2>this is me pb7 watching react webseries by akshay saini</h2>
            <User
                // name="pb7 functional component" one way of passing props
                name={"pb7 functional component props sikhchi"}  // another way of passing props
            />
            {/* <h3>class based component starts</h3> */}
            <UserClass
                name="pb7 class based component props sikhchi"
            />
        </>
    )
}

export default About;