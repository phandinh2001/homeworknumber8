//  //2
// console.log(document.getElementById("upper_btn"));
// //3
// document.getElementById("upper_btn").addEventListener("click", function () {
//     console.log("Upper it!!! just clicked")
// })
// //4
// console.log(document.getElementById("name_input"));
// //5

// document.getElementById("upper_btn").addEventListener('click',function(){
//     console.log(`User's name : ${document.getElementById("name_input").value}`);
// })
// //6

// document.getElementById("upper_btn").addEventListener('click',function(){
//     console.log(`User's name : ${document.getElementById("name_input").value.toLocaleUpperCase()}`);
// })
// //7
// console.log(document.getElementById("result_div"));
//8
document.getElementById("upper_btn").addEventListener("click", function () {
    let input = document.getElementById("name_input").value.toLocaleUpperCase();
    document.getElementById("result_div").innerHTML = input
})
