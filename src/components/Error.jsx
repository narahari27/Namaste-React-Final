import { useRouteError } from "react-router";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Ooopsss!!!!!!</h1>
            <h2>Something went wrong please try later</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
};
export default Error;