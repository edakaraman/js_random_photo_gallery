const content = document.querySelector(".photos");
const URL = "https://source.unsplash.com/random/";
const row = 5;

for (let i = 0; i < row * 3; i++) {
    const image = document.createElement("img");
    image.src = `https://source.unsplash.com/random/300x300?${i}`;
    content.appendChild(image);
}
