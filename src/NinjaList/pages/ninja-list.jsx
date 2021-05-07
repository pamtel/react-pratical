import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {AppContext} from '../App'
import Loading from '../component/Loading'
import useFetch from '../useFetch'


function NinjaList() {
    const [state, dispatch] = useContext(AppContext)

    console.log(state);
    useFetch("https://jsonplaceholder.typicode.com/users", dispatch)
    if(state.isLoading) {
       return <Loading/>
    }
    return (
        <>
        <h1 className="headings">All Ninjas</h1>
        {state.ninjas.map(ninja => <Ninja key={ninja.id} {...ninja}/>)}
        </>
    )
}

const Ninja = (props) => {
    console.log(props);
    return (
        <Link to={`/ninjas/${props.id}`}>
            <article className="bg-white mb-5 p-3 border-l-8 border-white hover:border-blue-600 ">
                <h3 className="font-bold text-xl mb-2">{props.name}</h3>
                <p className="mb-2">{props.username}</p>
                <p className="mb-2">{props.phone}</p>
            </article>
        </Link>
    )
}

export default NinjaList
