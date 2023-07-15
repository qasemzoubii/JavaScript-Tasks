let box = document.createElement("div");
let paragraph = document.createElement("p");
paragraph.textContent = "Hello World !";
box.appendChild(paragraph);

// Add event listener for mouseover
box.addEventListener("mouseover",() => {
        paragraph.textContent = "Can i help you ?";
    }); 


// Add event listener for mouseout
box.addEventListener("mouseout",()=>
{
    paragraph.textContent = "Hello World !";
}); 

//styling
box.style.border = "1px solid black ";
box.style.backgroundColor= "yellow";
box.style.textAlign = "center";
box.style.width = "500px"
box.style.fontSize = "18px"
box.style.fontWeight = "bold"


document.body.appendChild(box);