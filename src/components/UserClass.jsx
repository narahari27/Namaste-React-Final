import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state =  {
            userInfo:{
                name:"dummy",
                location:"default",
                
            }
        };
    }
    async componentDidMount(){
        //ApiCall
        const data = await fetch("https://api.github.com/users/narahari27");
        const json =  await data.json();
        this.setState({
            userInfo:json,
        });    
        // console.log(json);
    }
    componentDidUpdate(){
        // console.log("Component did update");
    }
    componentWillUnmount(){
        // console.log('Compoment will Unmount');
    }
    render(){
        const {name,login,avatar_url} = this.state.userInfo;
        return(
        <div className="user-card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
            <img className="img-size w-24 h-24 mb-3 rounded-full shadow-lg" src={avatar_url}/>
            <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name:{name}</h2>
            <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white" >Login: {login}</h3>
            <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Contact:@narahari.eng</h4>
            </div>
        </div>
        )
    }
};
export default UserClass;