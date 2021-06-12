//2.1
let buttonOne = document.getElementById("button1");
buttonOne.addEventListener('click', function (e) {
console.log(e.target)
	// Callback body
    });
let buttonTwo = document.getElementById("button2");
buttonTwo.addEventListener('click', function (e) {
    console.log(e.target)
        // Callback body
    });
    //e.target trả về chính elment  mà nó đang  bắt sự kiện.
//2.2
document.getElementById("input").addEventListener('keydown',function(e){
    console.log(e.key);
})
    //e.target  hiển thị kết quả mà chúng ta nhập vào ô input