const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//console.log(chosenImage);

//const bgImage = document.createElement("img"); //createElement 테그 생성 함수
//console.log(bgImage);
//bgImage.src = `img/${chosenImage}`;
//console.log(bgImage);

//document.body.appendChild(bgImage); //html body에 맨 마지막에 코드 추가
//document.body.prepend(bgImage); //html body에 맨 처음에 코드 추가


document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundRepeat = `no-repeat`;
document.body.style.backgroundSize = `cover`;