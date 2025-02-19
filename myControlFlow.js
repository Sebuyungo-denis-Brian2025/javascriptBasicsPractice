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

//using a break in the while loop
let w = 1;
while(w<=10){
  if(w===6){
  break;
  }
  //console.log(w)
  w++
}

//for of loop:used when we dont want to iterate over elements without using index.

let mynumbers=[1,2,3,4,5,6,7,8,9]

for(let element of mynumbers){
   // console.log(element)
}
//Break statement:used to exit a loop in order to avoid an infinite loop

 //for loop  break

 for(let i=0;i<=10;i++){
   if(i===6){
    break;
   }
  // console.log(i);
 }
 

 //break statement in a while loop
  let x=0;
  while(x<=10){
    if (x===6){
      break;
    }
    //console.log(x)
    x++;
  }

  //break statement in a do while loop

     let y=0;
     do{
      if(y===6){
        break;
      }
     // console.log(y)
      y++;
      
      } while(y<=10);


      //break statement with the for in loop
      //the for in loop is used with objects

      const mycourse={a:1,b:2,c:3,d:4};
      for(let key in mycourse){
        if(key==='d'){
          break;
        }
        //console.log(mycourse[key]);
      }

      //break statement with the for of loop
      //used on the arrays
       const arr=[1,2,3,4,5];
       for(let element of arr){
        if(element===4){
          break;
        }
        //console.log(element);
       }

       //continue statement:used to skip the current iteration of the loop for
       // the next iteration

        //continue statment for the for loop
        for(let i=0;i<10;i++){
          if(i % 2===0){
            continue;
          }
          //console.log(i);
        }

        //continue statement for a while loop
        let z=0;
        while(z<=10){
          z++;
          if(z % 2===0){
            continue;
          }
          //console.log(z);
        }

        //continue statement fora do while loop
        let v=0;
        do{
          if(v % 2===0){
            continue;
          }
          v++;
          //console.log(v);
        }while(v<=10)

          //continue statement for the for in loop
          //for in loop is used with objects

          const obj={a:1,b:2,c:3,d:4};
          for(let key in obj){
            if(obj[key]%2===0){
              continue;
            }
            //console.log(obj[key])
          }

          //continue statment for the for of 
          const myarr=[1,2,3,4,5];
          for(let element of myarr){
            if(element % 2===0){
              continue;
            }
            //console.log(element);
          }

 
          //A function that takes 2 values and returns max number

          //function maxNum(num1, num2){
            //return num1 >= num2 ? num1 : num2;
         // }
           
           // console.log(maxNum(2, 3));

          function testNumber(testNum){
              if(testNum %3===0 && testNum %5===0){
               console.log("fizzBuzz");
              }
}
                 console.log(testNumber(15));

                      