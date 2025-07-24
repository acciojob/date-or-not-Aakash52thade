var isDate = function (input) {
  if(Object.prototype.toString.call(input) === "[object Date]"){
      return !isNaN(input);
  }
  
  if(typeof input === "string"){
      const date = new Date(input);
      return !isNaN(date.getTime());
  }
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
