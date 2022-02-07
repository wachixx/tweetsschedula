import {useState, useContext} from 'react';
import uuid from 'react-uuid';

import {Context}  from '../context/Store';


//custom hook to process form
const useForm = (initialValues, validate, props) => {

    const [state, dispatch] = useContext(Context);
	const [inputs,setInputs] = useState(initialValues);
	const [errors,setErrors] = useState({});

    let tweets = state.tweets || [];

	const handleSubmit = (event) => {

		event.preventDefault();
		const validationErrors = validate(inputs);
		const noErrors = Object.keys(validationErrors).length === 0;
		setErrors(validationErrors);

		if(noErrors){
            if(state.tweet === null){
                dispatch({type:"ADD_TWEET", payload: addInput(tweets, inputs)});
            }else{
                dispatch({type:"UPDATE", payload: editTweet(state.tweet, inputs)});
                dispatch({type:"SET_EDIT_TWEET", payload: null});
            }
            event.target.reset();
            props.setShowModal(false);
		}

	}

	const handleInputChange = (event) => {
    	event.persist();
    	setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  	}

	return {
    	handleSubmit,
   		handleInputChange,
    	inputs,
    	errors
  	};
}

const addInput = (tweets, inputs) =>{
    let tweet = {
        id: uuid(), ...inputs
    }
    return  [...tweets, tweet];
}

const editTweet = (tweet, inputs) => { 
    let updatedTweet  = {
        id: tweet.id, ...inputs
    }
    return updatedTweet;
}

export default useForm;