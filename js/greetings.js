// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = login.querySelector("button");


const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// function onLoginBtnClick() {
//     // console.dir(loginInput);
//     // console.log("click!!");
//     //console.log("hello", loginInput.value);

//     // const username = loginInput.value;
//     // if (username === "") {
//     //     alert("Please write your name");
//     // } else if (username.length > 18) {
//     //     alert("Your name is too long")
//     // }
//     //html을 form-input 형식으로 해주면 js(click event에 대한)를 작성할 필요가 없다.

//     const username = loginInput.value;
//     console.log(username);
// }

//loginButton.addEventListener("click", onLoginBtnClick);

const HIDDEN_CLASSNAME = "hidden"; //string변수명은 대문자만 쓴다.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    //console.log(event);
    //console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    painGreetings(username);
}

function painGreetings(username) {
    //greeting.innerText = "Hello" + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings 새로고침을 해도 localstorage에 담아있는 데이터를 보여주기 위해서
    painGreetings(savedUsername);
}








//achor 함수 작동 금지와 이벤트 요소 배우기
const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
    //console.log(event);
    //alert("click!!");
}

link.addEventListener("click", handleLinkClick);



