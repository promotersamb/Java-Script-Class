// var age = 18;
// if(age <= 18);{
//     console.log("You cannot vote")
// }
// else if(age === 18){
//     console.log("You can vote")
// }
// else if(age >= 18){
//     console.log("You are eligible to vote")
// }

// for(var i =0; i<=100; i++){
//     console.log(i);
// }

// var a = [10,3,7,6,8,5]
// for(var i = 0; i<a.length; i++){
//     console.log(a[i])
// }

// var a = [10,3,7,6,8,5]
// for(var i = 0; i<a.length; i++){
//     if(i%2 !==0){
//         console.log(a[i])
//     }
// }

var array = [10,20,30,40,50]
var sammy = array.length
var sum =0;
for(var i = 0; i < sammy; i++){
    sum +=array[i]
    //  sum = sum + array[i]
}
var average = sum / sammy
console.log("The average is:" +average)