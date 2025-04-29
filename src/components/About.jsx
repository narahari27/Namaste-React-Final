import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
        super(props);
        // console.log("parent Constructor");
    }
    componentDidMount(){
        // console.log("Parent component did mount");
    }
    render(){
        console.log("parent render");
        return (
            <div className="flex justify-center align-middle flow-col my-11">
                {/* <h1>About class Component </h1>
                <h2>This is Namaste React</h2> */}
                <UserClass name={"akshay Gudagudi(class)"} location={"Bangalore"} />
            </div>
           
        )
    }
}

export default About;