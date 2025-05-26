const name = "BBONZI"
// 상수 name은 문자열 BBONZI

let text = ""
// 상수를 활용하기 위해서 변수를 선언함, 비어진 값을 대입

for (const x of name){
    text += x + "<br>";
    // +=연산자는 비어져 있는 상태에서 더해주는 것
    // 변수 개별에 줄바꿈 태그를 더해서
}

// document.write(text)
document.getElementById("one").innerHTML = text


// -----------------------------------------------------------------------------------


// Set :고유한 값만 출력
const letter = new Set(["B", "B", "O", "N", "Z", "I"]);

let txt = "";
for (const y of letter){
    txt += y + "<br>";
}

// document.write(txt)
document.getElementById("two").innerHTML = txt


// -----------------------------------------------------------------------------------


// 키와 밸류 => map
const fruits = new Map([
    ["apples", 1000],
    ["banana", 500],
    ["orange", 200]
    // [key, value] : 앞에 과일들이 키, 뒤에 숫자가 밸류
]);

let nums = fruits.get("orange");
document.getElementById("three").innerHTML = "지금 창고에는" + nums + "개의 오렌지가 있다!";