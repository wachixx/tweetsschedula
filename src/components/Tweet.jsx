import {useContext} from "react";
import {Context}  from '../context/Store';

const Tweet = (props) => {

    const [state, dispatch] = useContext(Context);

    const removeTweet = (id) =>{
        dispatch({type:"DELETE", payload: id});
    }

    const showEditModal = (tweet) =>{
        dispatch({type:"SET_EDIT_TWEET", payload: tweet});
        props.setShowModal(true);
    }

    return(
        <div className="tweet-wrapper">
            <div>
                <div className="user-profile">
                    <i className="fa fa-user-circle"></i>
                    <div className="tweet-controls-wrapper flex-row-btwn">
                        <div>
                            <p className="twitter-username">@twiterUsername</p>
                            <p className="daytime-txt">Scheduled for {props.tweet?.tweetDate} at {props.tweet?.tweetTime}</p>
                        </div>
                        <div className="control-icons">
                            <i className="fa fa-edit" onClick={()=>showEditModal(props.tweet)}></i><i onClick={()=>removeTweet(props.tweet?.id)} className="fa fa-window-close"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tweet-wrapper-bottom">
                <p>{props.tweet?.tweetText}</p>
            </div>
        </div>
    )
}

export default Tweet;

