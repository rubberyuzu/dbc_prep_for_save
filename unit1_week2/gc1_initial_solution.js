  function sum(input_array)
  {
    var answer = 0;
    
    for (var i = 0; i < input_array.length; i++)
    {
      answer += Number(input_array[i]);
    }// end for loop
    console.log(answer);
  }// end function
  
  function mean(input_array)
  {
    var answer = 0;
    
    for (var i = 0; i < input_array.length; i++)
    {
      answer += Number(input_array[i]);
    }// end for loop
    console.log("Mean = " + " " + (answer/input_array.length));
  }// end function
  
  function median(input_array)
  {
    var length = input_array.length;
    if (length === 0)
      return null;
    input_array.sort(function (a,b){return a - b});
    var middle = Math.floor(length/2);
    if ((length % 2) === 0) {
      var sum = input_array[middle] + input_array[middle - 1];
      var mean = (sum / 2);
      return mean;
    }
    else 
      return input_array[middle];
  }
  
