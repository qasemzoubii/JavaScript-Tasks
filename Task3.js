let flag = document.querySelector("#FLAG");
flag.style.display = "block";
let image = document.createElement("img");
image.src = "/13-july-2023/Flag_of_Jordan.svg.png";
document.body.appendChild(image);
image.style.width = "700px";
flag.addEventListener("change", () => {
if (flag.value === "Palestine") {
image.src = "/13-july-2023/Flag_of_Palestine.png";
} else {
image.src = "/13-july-2023/Flag_of_Jordan.svg.png";
}
});