
// // "use strict"
const boxes = document.querySelector(".box");
const image = document.querySelector(".image");
const input = document.getElementById("input");
let size = (shadow) => {
    if (1 > 0) {
        boxes.style = `border-radius:${shadow}px`;
        image.style = `display: flex`;
    }
}


// let oddColorizer = (big) => {
//     boxes.forEach((e, key) => {
//         if (key % 2 == 0) e.style = `height:${big}px`;
//         else e.style = `height:500px`;
//     })
// }
window.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        size(input.value);
        input.value = "";
    }
})


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;

// multiplyNumeric(menu)
// console.log(menu);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = John + Ann + Pete;
// console.log(sum);
// // длина строк
// let str ="Alexa";
// console.log(str.length);


// индексы
// let str ="Alexa";
// console.log(str[str.length - 2]);

// let str ="Alexa";
// console.log(str.charAt(0));


// function charAt(index){
//     if(str[index] === undefined){

//     }
// }
// массивы

// let userName = ['alex', 'djoha', 'lasiz', 'jeka', 'petya'];
// userName[5] = "gym";
// console.log(userName[5]);



// let a = new Array();
// console.log(a);
// for (let i = 0; i < 100; i++) {
//     for (j = 1; j <= i+1; j++) { a[i] = j;
//     }
// }
// console.log(a);


// let a = [2, 3, 7, 4, 5, 4, 7, 'gigk', 44, 545, 546, 543, 12, 344];
// for (let i = 0; i < a.length; i++)output.innerHTML += a[i] + '<br>';

// let arr = [1, 2, 3];
// // let len = arr.length;
// for (i = 0; i <= arr.length; i++) arr.pop();
// console.log(arr);



// let input = document.getElementById("input");
// let output = document.getElementById("output");

// window.addEventListener("keyup", function (e) {
//     if (e.key == "Enter") {
//         output.innerHTML += input.value + "<br>";
//         console.log(input.value);
//         input.value = "";
//     }
// });





// let arr =[1,2,3,4];
// console.log(arr);
// arr.unshift(123,323,344);
// arr.pop(arr.push(10,11,12,))
// console.log(arr);

// let arr =[1,2,3,4,5];

// for(let i of arr){
//     arr.pop()
//     console.log(i);

// // }
// let age = +prompt("соклько вам лет",)
// // let val1 = alert('false');
// // let val2 = alert('true');
// function checkAge(age) {
// return age>18 ? alert('true'): alert('folse')

// }
// checkAge(age)
// let one=+prompt();
// let two=+prompt();;
// function min(one,two) {
//     if (one < two) {
//         return one;
//     } return two;
// };
// alert(min(8,7));


//
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   function showOk() {
//     alert( "Вы согласны." );
//   }

//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }
// let sum = (a, b) => a + b;
// alert(sum(4,5))
// let ask=(question,yes,no)=>{
//     confirm(question)?yes():no();
// return ask;
// }
// ask(
//     "Вы согласны",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }kkkkkkk
// // )
// let a = document.getElementById("input");
// let b = document.getElementById("her");
// window.addEventListener('keyup',function (e) {
//     if(e.key == "Enter"){
//         b.innerHTML += a.value + '<br>';
//         a.value = '';
//     }
// // })
// let a = document.querySelectorAll("div");
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i].innerHTML);

// }
// function hello(name){
//     let phrase =`Hello, ${name}!`;
//     say(phrase);
// }
// function say(phrase) {

// alert(`**${phrase}**`);
// }
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let ke in user) {
//     // ключи
//     alert( ke );  // name, age, isAdmin
//     // значения ключей;
//     alert( user[ke] ); // John, 30, true
//   }
