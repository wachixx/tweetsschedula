const Validate = (inputs) => {

   const errors = {};
   const todayDateTime = new Date().setHours(0,0,0,0);
   const selectedDate = new Date(inputs.tweetDate).setHours(0,0,0,0);
   const selectedDateTime = new Date(inputs.tweetDate +" "+ inputs.tweetTime);

   if(!inputs.tweetText){    //tweet message Errors
       errors.tweetText = 'Check tweet message';
   }
   
   if(!inputs.tweetTime){    //time message Errors
       errors.tweetTime = 'Check time';
   }

   if((todayDateTime === selectedDate) && (selectedDateTime < new Date())){  //If on the same day, time should not be more than the current time
       errors.tweetTime = 'Check time';
   }

   if(!inputs.tweetDate){   //date message Errors
       errors.tweetDate = 'Check date';
   }
  
   if(selectedDate <  todayDateTime ){   //date should not be in the past
      errors.tweetDate = 'Check date';
   }

   return errors;
}

export default Validate;