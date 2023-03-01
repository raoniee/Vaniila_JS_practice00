const clock = document.querySelector("h2#clock");

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 5000); //설정시간 후 맞춰 계속 반복 실행
// setTimeout(sayHello, 5000); //설정시간 후 한번 실행, 반복 없음

function getClock() {
    const date = new Date();
    //clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    const hours = String(date.getHours()).padStart(2, "0"); //number->string() padStart,padEnd(length,string)
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //시간의 흐름을 나타내기 위해
