import { useEffect } from "react";
import {FETCH_SUCCESS} from './actions'


function useFetch(url, dispatch) {
    const fetchNinjas = async () => {
        const response = await fetch(url)
        const data = await response.json();
        dispatch({type: FETCH_SUCCESS, payload: data})
    }

    useEffect(() => {
        try {
            fetchNinjas()
        }catch(err){
            console.log(err);
        }
    }, [url, dispatch])
}

export default useFetch
