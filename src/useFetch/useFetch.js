import  {useState,useEffect} from 'react'

function useFetch(url) {
    const [content, setContent] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const getUsers = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setContent(data)
            setIsLoading(false)
        }
        catch(err) {
            setIsLoading(false)
            setIsError(true)
            console.log(err);
        }
    }
    useEffect(() => {
        getUsers()
    }, [url])

    return [content, isLoading, isError]
}

export default useFetch
