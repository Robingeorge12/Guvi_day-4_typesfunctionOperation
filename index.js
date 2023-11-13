
//1.  Do the below programs in anonymous function & IIFE

let array = [1,2,3,4,5,6,7,8,9]

// anonymous function operations /////////////////////////////////////////////////////////////

//a.  Print odd numbers in an array

function odd(ar){
 
    console.log(ar)
    for(let i=0;i<ar.length;i++){
        if(ar[i]%2!==0){
            // console.log(ar[i]) ans
        }
    }

}
odd(array)




//b. Convert all the strings to title caps in a string array

let str = ["robin", "subin"]

function title (str){

let res = str.map((str)=>{ 

//    return str.charAt(0).toUpperCase()+ str.slice(1)
return str.toUpperCase()
    
})

    return res

}
// console.log(title (str))



//c. Sum of all numbers in an array

let ar2 = [1,2,3,4,5,6,17]

function sum(ar){

    let total = ar.reduce((acc,el,i)=>{
     return acc+el
    },0)

    return total
}
// console.log(sum(ar2))




//d. Return all the prime numbers in an array

let ar3 = [1,2,3,4,5,6,17]

// function prime(ar){
 
//     let res = []
//     for(let i=0;i<ar.length;i++){

//        for(let j=2;j<ar.length;j++){

//         if(ar[i]==1 || ar[i]==0){
//             break;
//         }else{

//             if(ar[i]%j==0){
//                 console.log(ar[i]) 
//                 break
//             }


//         }

//        }
//     }

// }
// console.log(prime(ar3))
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  
  
  const primeNumbers = ar3.filter((num) => isPrime(num));
  
  console.log(primeNumbers);
  



//e. Return all the palindromes in an array

let char = ["level","love","dud"]

console.log(isPal(char))

function isPal (str){

let fin = []

for(let i=0;i<str.length; i++){

    let y = []

    let x = str[i].trim().split("")
    let k = x.reverse()
    let res = k.join("")

    if(res==str[i]){

        fin.push(str[i])
    }
    // console.log(x,k,res)
}
return fin
}


//f. Return median of two sorted arrays of the same size.
let a1 = [2,4,1,5]
let a2 = [9,3,8,2]

console.log(median(a1,a2))
function median(a1,a2){

    let a = a1.sort((a,b)=>{
       return a-b
    })
    let b = a2.sort((a,b)=>{
        return a-b
     })

     let con = ([...a,...b])
     console.log(con)
     let len  = con.length
     const mid = Math.floor(len / 2);
  return  con[mid];
    // console.log(con)

}


//h. Remove duplicates from an array

let d = [3,5,4,3,5]

console.log(dup(d))

function dup(d){

let obj = {}
let res = []

for(let i=0;i<d.length;i++){
    
        let num = d[i]
        
        if(obj[num] == undefined){
            
            obj[num] = 1
            
        }else{
            obj[num]+=1
        }
        
    }
    // console.log(obj)
    for(let k in obj){
        res.push(k)
    }
    return res
    // console.log(res)
}


//i. Rotate an array by k times


let rot = [1,2,3,4]
let fr = 3

// console.log(rotate(rot,fr))

function rotate(rot,k){

    let rev = []
    let n = rot.length;
    k = k % n;

    const rotated = rot.slice(k).concat(rot.slice(0, k));
    return rotated;
  
}



// 2. Arrow function




// Print odd numbers in an array

let odd1 = (ar)=>{
 
  console.log(ar)
  for(let i=0;i<ar.length;i++){
      if(ar[i]%2!==0){
          // console.log(ar[i]) 
      }
  }

}
odd1(array)

// Convert all the strings to title caps in a string array

let str1 = ["robin", "subin"]

let title1 =  (str)=>{

let res = str.map((str)=>{ 

//    return str.charAt(0).toUpperCase()+ str.slice(1)
return str.toUpperCase()
    
})

    return res

}
// console.log(title1 (str))

// Sum of all numbers in an array

let ar5 = [1,2,3,4,5,6,17]

let sum1 = (ar)=>{

    let total = ar.reduce((acc,el,i)=>{
     return acc+el
    },0)

    return total
}
// console.log(sum1(ar2))

// Return all the prime numbers in an array


let isPrime1 = (num)=>{
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}


const primeNumber = ar3.filter((num) => isPrime1(num));

console.log(primeNumber);


// Return all the palindromes in an array


let char2 = ["level","love","dud"]



let isPallin = (str)=>{

let fin = []

for(let i=0;i<str.length; i++){

    let y = []

    let x = str[i].trim().split("")
    let k = x.reverse()
    let res = k.join("")

    if(res==str[i]){

        fin.push(str[i])
    }
    // console.log(x,k,res)
}
return fin
}
console.log(isPallin(char2))














// by usin IIFE opertion /////////////////////////////////////////////////////////////////////////



//a.  Print odd numbers in an array


(function(ar){
 
  console.log(ar)
  for(let i=0;i<ar.length;i++){
      if(ar[i]%2 !==0){
          // console.log(ar[i])
      }
  }

})([1,2,3,4,5]);





//b. Convert all the strings to title caps in a string array



(function(str){

let res = str.map((str)=>{ 

   return str.charAt(0).toUpperCase()+ str.slice(1)
// return str.toUpperCase()
  
})

console.log(res)

})(["robin","subin"]);



//c. Sum of all numbers in an array


(function sum(ar){

  let total = ar.reduce((acc,el,i)=>{
   return acc+el
  },0)

  console.log(total)
})([1,2,3,4,5,6,17])





// /d. Return all the prime numbers in an array


(function(arr) {
  const result = arr.filter(function(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  

//e. Return all the palindromes in an array


// (function() {
//   let resArray = []; // Create an array to store the reversed strings

//   const str = ["level", "love", "dud"];

//   for (let i = 0; i < str.length; i++) {
//     let x = str[i].trim().split("");
//     let k = x.slice().reverse(); // Use slice() to create a copy of the array
//     let res = k.join("");
//     resArray.push(res); // Store the reversed string in the array
//     console.log(x, k, res);
//   }

//   console.log(resArray.join(" ")); // Join and print the reversed strings
// })();

(function(){

  // let str = ["level","love","dud"]
 for(let i=0;i<str.length; i++){

    let x = str[i].trim().split("")
    let k = x.reverse()
    let res = k.join("")

    console.log(x,k,res)
}
console.log(res)

})(["level","love","dud"]);



//f. Return median of two sorted arrays of the same size.

(function(a1,a2){

    let a = a1.sort((a,b)=>{
       return a-b
    })
    let b = a2.sort((a,b)=>{
        return a-b
     })

     let con = ([...a,...b])
     console.log(con)
     let len  = con.length
     const mid = Math.floor(len / 2);
  // return  con[mid];
    console.log(con[mid])

})([9,3,8,2],[2,4,1,5])


//h. Remove duplicates from an array

// let  = [3,5,4,3,5]



(function (d){

let obj = {}
let res = []

for(let i=0;i<d.length;i++){
    
        let num = d[i]
        
        if(obj[num] == undefined){
            
            obj[num] = 1
            
        }else{
            obj[num]+=1
        }
        
    }
    // console.log(obj)
    for(let k in obj){
        res.push(k)
    }
    // return res
    console.log(res)
})([3,5,4,3,5])


//i. Rotate an array by k times


// let rot = [1,2,3,4]
// let fr = 3

// console.log(rotate(rot,fr))

(function(rot,k){

    let rev = []
    let n = rot.length;
    k = k % n;

    const rotated = rot.slice(k).concat(rot.slice(0, k));
    console.log(rotated)
  
})([1,2,3,4],3)