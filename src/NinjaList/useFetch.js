import { useEffect,useCallback } from "react";
import {FETCH_ALL_NINJAS, FETCH_SINGLE_NINJA} from './actions'


function useFetch(url, dispatch,dispatchType='All') {
    let dispatchAction;
    if(dispatchType === "single"){
        dispatchAction =  FETCH_SINGLE_NINJA
        dispatch({type: dispatchAction})
    }else{
        dispatchAction = FETCH_ALL_NINJAS
        dispatch({type: dispatchAction})
    }


    const fetchNinjas =  useCallback( () => {
             fetch(url)
           .then(response => response.json())
            .then(response => {
                dispatch({type: dispatchAction, payload:response})
            })
    },[dispatch,dispatchAction,url]
) 
    useEffect(() => {
        try {
            fetchNinjas()
        }catch(err){
            console.log(err);
        }
    }, [fetchNinjas])
}

export default useFetch
