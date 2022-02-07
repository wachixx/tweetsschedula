import {useState, useContext, useEffect} from "react";
import Tweet from "../components/Tweet";
import TweetModal from "../components/TweetModal";
import TweetForm from "../components/TweetForm";
import {Context}  from '../context/Store';

const Home = () => {
  
  const [state, dispatch] = useContext(Context);
  const [tweets, setTweets] = useState(state.tweets);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    let sortedTweets = state.tweets.sort(function(a,b){
      return new Date(a.tweetDate +" "+ a.tweetTime) - new Date(b.tweetDate +" "+ b.tweetTime);
    });
    setTweets(sortedTweets);
  },[state.tweets], tweets)


  return (
    <div className="app-container">
      <header className="app-header flex-row-btwn">
          <p><strong>{tweets?.length}</strong> scheduled</p>
          <button onClick={()=>setShowModal(!showModal)} className="btn-blue">Schedule a tweet</button>
      </header>

      <section className="tweets-wrapper">
           {tweets?.length > 0?
             tweets?.map((tweet, i)=>{
                return(
                 <Tweet tweet={tweet} key = {i} setShowModal={setShowModal}/>
                )
             })
             : 
             <div className="tweets-wrapper">
                <p>You have no scheduled tweets</p>
             </div>
           }
      </section>

      <TweetModal show={showModal}>
         <TweetForm setShowModal={setShowModal}/>
      </TweetModal>

    </div>
  );
}

export default Home;
