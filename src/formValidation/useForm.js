import {useState, useEffect, useCallback} from 'react';

const initialState = {
    firstName:"",
    email:"", 
    password:"", 
    password2:"",
}

function useForm(validate) {
    const [formInput, setFormInput] = useState(initialState)
    const [inputArray, setInputArray] = useState([])
    const [errorMsg, setErrorMsg] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormInput({...formInput, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMsg(validate(formInput))
        setIsSubmitting(true)
    }

    const submitData = useCallback(() => {
          const newInput = {...formInput, id: new Date().getTime().toString()}  ;
          setInputArray([...inputArray, newInput]);
          setFormInput(initialState);
          setErrorMsg(initialState);
          setIsSubmitting(false)
        },
        [formInput, inputArray],
    );

    useEffect(() => {
       if (Object.keys(errorMsg).length === 0 && isSubmitting) {
           submitData();
       }
    }, [submitData, isSubmitting, errorMsg])
    return {handleChange, handleSubmit, formInput, inputArray, errorMsg};
}

export default useForm
