let m = document.getElementById("mymodal")
let bm = document.getElementById("btn-modal")
let dm = document.getElementById("closemodal")

bm.onclick = function(){
m.style.display = "block"
}
dm.onclick = function(){
  m.style.display = "none"
}
window.onclick = function(){
  if(event.target == m){
   m.style.display = "none"
  }
}