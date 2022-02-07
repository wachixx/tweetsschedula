import {useState, useContext, useEffect} from "react";
import Tweet from "../components/Tweet";
import TweetModal from "../components/TweetModal";
import TweetForm from "../components/TweetForm";
import {Context}  from '../context/Store';

const Home = () => {
  
  const [state, dispatch] = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  //rerender when state changes
  useEffect(()=>{
      console.log(state);
  },[state.tweets])


  return (
    <div className="app-container">
      <header className="app-header flex-row-btwn">
          <p><strong>{state.tweets?.length}</strong> scheduled</p>
          <button onClick={()=>setShowModal(!showModal)} className="btn-blue">Schedule a tweet</button>
      </header>

      <section className="tweets-wrapper">
           {state.tweets?.length > 0?
             state.tweets?.map((tweet, i)=>{
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
