const Reducer = (state,  action) => {                                           
    switch (action.type) {                                                      
        case 'ADD_TWEET':                                                             
            return {                                                            
                ...state,                                                       
               tweets: action.payload                                            
            }; 
        case 'SET_EDIT_TWEET':                                                          
            return {   
               ...state,                                                        
               tweet: action.payload                                            
            };  
        case 'UPDATE':                                                           
            return {tweets: state.tweets.map((tweet) =>
                tweet.id === action.payload.id
                  ? {...tweet, ...action.payload}
                  : tweet
            )};                                                                                                                 
        case 'DELETE':                                                                                       
            return {tweets: state.tweets.filter(
                tweet => tweet.id !== action.payload
            )}                                                       
        default:                                                                
            return state;                                                       
    }                                                                           
};                                                                              
                                                                                
export default Reducer; 