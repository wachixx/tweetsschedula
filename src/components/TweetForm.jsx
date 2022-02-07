import {useState, useContext, useEffect} from "react";

import useForm from '../utils/useForm';
import Validate from '../utils/Validate';

import {Context}  from '../context/Store';

 const TweetForm = props =>{

    const [state, dispatch] = useContext(Context);


    const makeInputs = () => {
        let inputs = {tweetText:'', tweetDate:'', tweetTime:''};
        if(state.tweet){
            inputs = {tweetText: state.tweet.tweetText, tweetDate: state.tweet.tweetText, tweetTime: state.tweet.tweetText}
        }
        return inputs;
    }

    const {inputs, handleInputChange, handleSubmit ,errors} = useForm(makeInputs(),Validate, props);

    //rerender when state changes
    useEffect(()=>{
    },[state.tweets, state.tweet])

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