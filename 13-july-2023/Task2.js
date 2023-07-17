let box = document.createElement("div");
let paragraph = document.createElement("p");
paragraph.innerHTML = "Hello World !";
box.appendChild(paragraph);
// let txt;

// Add event listener for mouseover
box.addEventListener("mouseover",() => {
    // txt = document.createTextNode('Can i help you ?');
    // paragraph.appendChild(txt);
        paragraph.innerHTML = "Can i help you ?";
    }); 


// Add event listener for mouseout
box.addEventListener("mouseout",()=>
{
    // txt = document.createTextNode('Hello World !');
    // paragraph.appendChild(txt);
    paragraph.innerHTML = "Hello World !";
}); 

//styling
box.style.border = "1px solid black ";
box.style.backgroundColor= "yellow";
box.style.textAlign = "center";
box.style.width = "500px"
box.style.fontSize = "18px"
box.style.fontWeight = "bold"


document.body.appendChild(box);