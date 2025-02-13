//do while :first executes the  block and then checks the condition
// we use do while we want to execute a block of code atleast once
/*let i=0;
do{
console.log(i);
i++;
}while(i<10);
*/

//an infinite loop is a loop that never ends eg

  //while(true){
   // console.log('loop')
//}

//To solve an infinite loop we must ensure that a loop terminates.ie using break key word eg
while(true){
    //console.log('myloop')
    break;
}

let i=false;

if(i)
{
  //console.log("i is true")
}else {
   // console.log('i is false')
}
//The other way to prevent an infinite loop is to put a condition and ensure the step condition renders the condition false at a given point eg

//Example 1
for(let num=0;num<=100;num++){
    //console.log(num);
}

//Example 2
for(let num=100;num>=0;num--){
    //console.log(num);
}


//Object literals: these are key value pairs of a javascript object
 //literals are fixed values used to used to define a javascript object 
 //eg string,number,boolean literals

const course={
    name:'Javascript for beginners',
    duration:3,
    sections:7
};

/* console.log(course.name);
console.log(course.duration);
console.log(course.sections)
 */

//for in loop:used to iterate over the values of a javascript object
for(let key in course){
    //console.log(course[key]);
}

let idx;
let numbers=[1,2,3,4,5,6,7,8,9,10];
for(idx=1;idx<numbers.length;idx++){
    //console.log(numbers[idx]);
}

//for of loop:used to iterate over the values of an array
  for(let element of numbers){
     //console.log(element);
  }

// break key word is used to exit a loop.
  for(let i=0;i<10;i++){
    if(i===5){
        break;// thi is used to exit the loop when i is equal to 5
  }
    //console.log(i);
  }

//using while loop with break key word

let b=0;
while(b<10){
    if(b===15){
        break;
 }
    //console.log(b);
    b++;
}


let c=0
do{
    if(c===5)
     break;
    console.log(c)
}
