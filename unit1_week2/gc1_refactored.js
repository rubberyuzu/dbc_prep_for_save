 
  function sum(input_array)
  {
    if (input_array.length===0){return null}
    else{
      var answer = 0;
      for (var i = 0; i < input_array.length; i++)
      {answer += Number(input_array[i]);}// end for loop
      console.log(answer)
      }
  }// end function
  // For this function, as a user, I want to input an array and then get a sum of all the elements in the array.



  function mean(input_array)
  {
    if (input_array.length===0){return null}
    else{
      var answer = 0;
      for (var i = 0; i < input_array.length; i++)
      {answer += Number(input_array[i]);}// end for loop
      console.log("Mean = "+ (answer/input_array.length))
      }
  }// end function
  // For this function, as a user, I want to input an array and then get a mean of the elements in the array.
  // Also for this, I want to display the sentence saying "Mean = *number*".
  

  function median(input_array)
  {
    input_array.sort(function (a,b){return a - b});
    var middle = Math.floor(input_array.length/2);
  
    if (input_array.length === 0) 
       {return null}
    else if ((input_array.length % 2) === 0) 
       {return (input_array[middle] + input_array[middle - 1])/ 2;}
    else 
       {return input_array[middle]}
  }
  // For this function, as a user, I would like to input an array and then get the median of the elements in the array.

