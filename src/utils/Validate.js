const Validate = (inputs) => {

   const errors = {};
   const today = new Date().setHours(0,0,0,0);
   const now = new Date().getHours() + ":" + new Date().getMinutes();

   //tweet message Errors
   if(!inputs.tweetText){
       errors.tweetText = 'Check tweet message';
   }
   //time message Errors
   if(!inputs.tweetTime){
       errors.tweetTime = 'Check time';
   }
   if((Date.parse(inputs.tweetDate) ===  today)){
    console.log(inputs.tweetDate +" "+ inputs.tweetTime +"-" + inputs.tweetDate +" "+ now)
        if(Date.parse(inputs.tweetDate +" "+ inputs.tweetTime) < (Date.parse(inputs.tweetDate +" "+  now))){
            errors.tweetTime = 'Check time';
        }
   }

   //date message Errors
   if(!inputs.tweetDate){
       errors.tweetDate = 'Check date';
   }
   if(Date.parse(inputs.tweetDate) <  today ){
      errors.tweetDate = 'Check date';
   }

   return errors;
}

export default Validate;