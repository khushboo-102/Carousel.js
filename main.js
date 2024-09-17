let heading = document.querySelector("h2")
let images = document.querySelector("#img")
let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let i = 0;
 let text = ["1", "2", "3"]
let carouselImg = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.jpeg", "images/images4.jpeg", "images/images5.jpeg", "images/images6.jpeg", "images/images7.jpeg", "images/images8.jpeg","images/images9.jpeg", "images/images10.jpeg", "images/images11.jpeg"]


function randomcColor() {
    let colors = ["blueviolet", "pink", "lite green", "brown", "yellow", "salmon","gray"]
    return colors[Math.floor(Math.random() * colors.length)]
}



nextButton.addEventListener("click", () => {
    console.log("helo")
    i++;
    if (i >= carouselImg.length) i = 0;
    images.setAttribute("src", carouselImg[i]);
    images.setAttribute("alt", text[i]);
    console.log(images)
    document.body.style.backgroundColor = randomcColor();
})
backButton.addEventListener("click", () => {
    console.log("Hello")
    i--;
    if (i < 0) i = carouselImg.length - 1;
    images.setAttribute("src", carouselImg[i]);
    images.setAttribute("alt", text[i]);
    console.log(images)
    document.body.style.backgroundColor = randomcColor();
})