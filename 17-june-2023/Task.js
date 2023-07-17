let btn = document.querySelector("button")
btn.addEventListener("click",function(){
let tbl= document.querySelector("table")
let x = new XMLHttpRequest()
x.open('GET','Task.json') 
x.onload= function () {
let jasondata =JSON.parse(x.responseText)
for (let i = 0; i < jasondata.length; i++) {
   let row = document.createElement("tr")
   tbl.appendChild(row)
   for (const key in jasondata[i]) {
if(key==="image"){
    let td = document.createElement("td")
    td.innerHTML = `<img src="${jasondata[i] [`${key}`]}" alt="">`
    row.appendChild(td)
}
else{
let td = document.createElement("td")
row.appendChild(td)
td.innerHTML=jasondata[i] [`${key}`]
}
}
}
}
x.send()})
