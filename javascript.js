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

// function addition(){
//     var a = 10;
//     var b = 20;
//     var c = a+b
//     console.log("The Value of c is " +30)
// }
// addition()

function pressed(){
    var text = document.getElementById("name").value
    if (text === "red"){
         document.getElementById("header").style.color = "red"
    }
    
    else if (text === "green"){
        document.getElementById("header").style.color = "green"
    }
    else{
        
    }
}

