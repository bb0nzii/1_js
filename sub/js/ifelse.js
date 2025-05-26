const time = new Date().getHours();
// 상수 time은 = Date 객체를 얻고 거기서 시간을 얻어옴
// ex) 18:30에서 18시만 얻어옴
// new 붙이면 객체를 만들어주는 것

let greeting; //let은 재선언,재할당 금지
if (time < 10){
    greeting = "good morning";
}else if(time < 20){
    greeting = "it's raining day";
}else{
    greeting = "good night";
}
document.getElementById("con").innerHTML = greeting;


let text;
if(Math.random() < 0.5){
    text = "Meowwwwwwwwww!!!";
}else{
    text = "<a href='http://youtube.com'>YOUTUBE</a>";
}
document.getElementById("txt").innerHTML = text;

let day;
switch(new Date().getDay()){
    case 0:
        day = "SUNDAY"
        break;
    case 1:
        day = "MONDAY"
        break;
    case 2:
        day = "TUESDAY"
        break;
    case 3:
        day = "WEDNSDAY"
        break;
    case 4:
        day = "THURSDAY"
        break;
    case 5:
        day = "FRIDAY"
        break;
    case 6:
        day = "SATURDAY"
        break;
    default:
        day = "Today is THURSDAY!!"
}
document.getElementById("day").innerHTML = day;