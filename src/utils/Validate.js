const Validate = (inputs) => {

   const errors = {};
   const today = new Date().setHours(0,0,0,0);
   const selectedDate = new Date(inputs.tweetDate);
   const selecteTime = inputs.tweetTime;

   const selectedDateTime = new Date(inputs.tweetDate);
   selectedDateTime.setHours(selecteTime.split(':')[0]);
   selectedDateTime.setMinutes(selecteTime.split(':')[1]);

   
   if(!inputs.tweetText){    //tweet message Errors
       errors.tweetText = 'Check tweet message';
   }
   
   if(!inputs.tweetTime){    //time message Errors
       errors.tweetTime = 'Check time';
   }
   if(selectedDateTime < new Date()){  //If on the same day, time should not be more than the current time
       errors.tweetTime = 'Check time';
   }

   if(!inputs.tweetDate){   //date message Errors
       errors.tweetDate = 'Check date';
   }
   
   if(selectedDate <  today ){   //date should not be in the past
      errors.tweetDate = 'Check date';
   }

   return errors;
}

export default Validate;