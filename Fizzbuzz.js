//PART 1

let result;
const x = "";

if(x % 3 === 0 && x %5 === 0){
    result = 'fizzbuzz';
} else if(x % 3 === 0) {
    result = "fizz";
} else if(x % 5 === 0){
    result = 'buzz';
} else {
    result = x;
}

console.log(result)


//PART 2




let max = 100;
for (let i = 1; i <= max; i++){
  if (i % 3 == 0 && i % 5 == 0) {
    result = "fizzbuzz";
  }
  else if (i % 3 == 0) {
    result = "fizz";
  }
  else if (i % 5 == 0) {
    result = "buzz";
  }
  else if (i % 3 != 0 || i % 5 != 0) {
    result = i;
  }
  console.log(result);
}