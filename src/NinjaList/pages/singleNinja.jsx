import { useContext } from 'react'
import  useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";

function SingleNinja() {
    const [state, dispatch] = useContext(AppContext)

    useFetch(`https://jsonplaceholder.typicode.com/users`,dispatch,"single");
    return (
        <div>
            <h2>My name is {state?.name}</h2>
            <p>I work at {state?.company?.name}</p>
            <p>I reside in {state?.address?.suite}, {state?.address?.street}, {state?.address?.city}</p>
            <p>You can contact me via my mail which is {state?.email} or via my website <a href={state?.website}>here</a></p>
        </div>
    )
}
export default SingleNinja
