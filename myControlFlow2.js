

//Exercise 1 
//Implement a function to accept two numbers and returns a maximum number

function maxNumber(num1,num2){
   let result= num1>num2 ? num1:num2;
   return result;
}
//console.log(maxNumber(9,20))


//Exercise 2
//implement a function to accept a number.Then return "fizzBuzz" if divisible by 3 and 5 or
//return "Fizz" if only divisible by 5 or
// return the original number if not divisible by 3 or 5

  let testNum;
function testNumber(testNum){
    if(testNum %3===0 && testNum %5===0){
     return("fizzBuzz");
    } else if(testNum %3===0) {
       return('Fizz');
} else if(testNum %5===0){
    return('buzz') 
}else if(testNum %3!==0 && testNum %5!==0){
     return(testNum)
};
}
   console.log(testNumber(25))


   //Exercise 3

   //implement two functions
   //The first function , have it accept an array as a parameter which contains a list of numbers.
   //it should then console log the even numbers in the array
   //for the second function,have it accept an array and log the odd numbers.

    function evenNumbers(arr){
        for(let myelement in arr){
           console.log(arr[myelement])
           if(myelement %2==0){
           console.log(myelement);
}
 }
    }

           evenNumbers([1,2,3,4,5,6,7,8,9]);


   //A function that accepts an  array and logs the odd numbers.
 function oddNumbers(arr1){
     for(let myelement in arr1){
      if(myelement %2!==0){
         console.log(myelement);
      }

     }
 }

      //oddNumbers([1,2,3,4,5,6,7,8,9])
    
//JAVASCRIPT OBJECTS
//Objects in javascript: used to store key value pairs(state)and functions(behaviours)
//encapsulates the object state and behaviors from external access & missuse

const Dog={
   name:'max',
   breed:'Dachshund',
   age:5,
   weightInPounds:12,
   eat:function(){
      //console.log(chomp);
   },
   bark(){
      //console.log('woof!');
   }
}

//Using a Factory function to create a new object
//reduce code duplication
//Use pascal case for the function name

function GetDog (name,breed,age,weightInPounds){
return{
   name:name,
   breed:breed,
   age:age,
   weightInPounds:weightInPounds,
   eat(){
      console.log('chomp');
   },
  bark(){
      console.log('woof!');
   }
}
}
const anotherDog=(GetDog('denis','Dachshund',23,79))

//console.log(anotherDog);

//using a factory function (re-usable)with syntactic sugar to create a new object
//use verb for the function name eg GetDog 
///Factory functions provide an efficient way to create a new object.
//Note:to use this syntactic sugar ,the object parameter variables names must be the same as the key name

 function GetDog2(name,breed,age,weightInPounds){
   return{
   name,
   breed,
   age,
   weightInPounds,
   eat(){
      console.log('chomp');
   },
   bark(){
      console.log('woof');
   }
}
 }

 const newDog=GetDog2('daniel','Dachsand',34,90);

 //console.log(newDog)


 //The constructor functions are used to instantiate new objects
 //defines a function that would initialize the new object
 //We should use nouns eg dog,person as name for the constructor function
//use pascal case for the contructo function name
//use this keyword to refer to the object being created
//used along with the new word

function Dog1(names,breeds,ages,weightInPoundss){
   this.names=names;
   this.breeds=breeds;
   this.ages=ages;
   this.weightInPoundss=weightInPoundss;
   this.eats=function(){
      console.log(this.name+':chomp');
   }
   this.barks=function(){
     // console.log(this.name+':whoof!')
   }
}

 const mySecondDog = new Dog1('festus','GermanShepherd',56,89);
 //console.log(mySecondDog);


 //Objects in javascript are dynamic
 //they are dynamic because you can add and change object properties and values eg
 const person={
   name:'steven'
 };

 //console.log(person)

 //adding property to an object

 //Method 1
 person.favouriteFood='tacos'
 //console.log(person)

 //method2
 person['favouriteIceCream']='chocolate'
 //console.log(person)

 //deleting a property from an object
 delete person.favouriteFood;
 //console.log(person)

 //adding a function to an object

 person.eat= function(){
   return('start eating')
}

   //console.log(person.eat());
  // person={}


  //Object constractors
  //every object in javascript has a contructor property implicitly.eg
  //you can always instatiate an object using the 'new' keyword
  //contructor property is a property that implicitly exists in all javascript objects

  const person1={
   name:'denis'
  };

  console.log(person1.constructor)


//functions are objects in javascript eg

//it has parameters/properties eg num1,num2
// it has a behaviour

function add(num1,num2){
   return b= num1+num2; 
}
const n=add;
//console.log(n(3,6))
//has a property length etc
console.log(add.length)

//Primitive datatypes are copied by their value while object types are copied by reference eg

let a=10;
let b=a;

a=20

console.log(a);
console.log(b);
  
//Mean while object types are passed through reference eg
  let c={value:40};
  let d=c;

  console.log(c);
  console.log(d);


//the object class in javascript can be used to iterate over object keys.
//eg
const mydog={
   name:'Max',
   age:5,
   eyecolor:'blue'
};
 for(let mykey in mydog){
   console.log(mydog[mykey])
 }

 //Using the object class to iterate over an object
 const keys=Object.keys(mydog);
 //console.log(keys)
 const values=Object.values(mydog);
 //console.log(values) 

 const entries=Object.entries(mydog)
  
 //console.log(entries)

 //Method 2
 for(const key of Object.keys(mydog)){
   console.log(key);
 }