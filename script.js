//your JS code here. If required.
let btn = document.querySelector("input");

let item = document.getElementById("colorSelect") 
btn.addEventListener("click", ()=>{
	item.options[item.selectedIndex].remove();
})




























