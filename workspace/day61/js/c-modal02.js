const navLogin = document.querySelector('.nav--login');
const modalBox = document.querySelector('.modal-box');
const xBox = document.querySelector('.x-box');

navLogin.addEventListener("click", () => {
    modalBox.style.display = "flex";
});

xBox.addEventListener("click", () => {
    modalBox.style.display = "none";
})

xBox.addEventListener("mouseover", (e) => {
    e.target.style.color = "red";
})

xBox.addEventListener("mouseout", (e) => {
    e.target.style.color = "black";
})

