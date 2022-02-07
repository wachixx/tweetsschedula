import {useState, useContext, useEffect} from "react";

import useForm from '../utils/useForm';
import Validate from '../utils/Validate';

import {Context}  from '../context/Store';

 const TweetForm = props =>{

    const [state, dispatch] = useContext(Context);

    const {inputs, handleInputChange, handleSubmit ,errors} = useForm({tweetText:'', tweetDate:'', tweetTime:''},Validate, props);

    //rerender when state changes
    useEffect(()=>{
       if(state.tweet){
           //setInputs(state.tweet);
       }
    },[state.tweet])

     return(
        <form onSubmit={handleSubmit}>
            <p className="label">Create Post</p>
            <textarea className="textarea" name="tweetText" onChange={handleInputChange}  value={inputs.tweetText}></textarea>
            {errors.tweetText && <p className="error-message">{errors.tweetText}</p>}
            
            <p className="label">Scheduled Date and Time</p>
            <div className="flex-row-btwn">
                <div className="textfield-wrapper">
                    <input className="textField" type="date"  name="tweetDate" onChange={handleInputChange} value={inputs.tweetDate}></input>
                    {errors.tweetDate && <p className="error-message">{errors.tweetDate}</p>}
                </div>
                <div className="textfield-wrapper">
                    <input className="textField" type="time" name="tweetTime" onChange={handleInputChange} value={inputs.tweetTime}></input>
                    {errors.tweetTime && <p className="error-message">{errors.tweetTime}</p>}
                </div>
            </div>
            
            <div className="flex-row-btwn modal-bar-wrapper">
                <button className="btn-default" type="button" onClick={()=>props.setShowModal(false)}>Close</button>
                <button className="btn-blue" type="submit">Save Tweet</button>
            </div>
        </form>
     )
 }

 export default TweetForm;